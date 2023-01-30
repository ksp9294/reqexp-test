// let str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// hxyp
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `

//const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(str.match(regexp))


// const regexp = /fox/gi
// //console.log(regexp.test(str))
// str = str.replace(regexp, 'AAA')
// console.log(str)


// const regexp = /the/gi
// console.log(str.match(regexp))

// console.log(str.match(/the/gi)) // 위와 동일

// 이스케이프 문자란 \(백슬래시) 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자를 말합니다.
//console.log(str.match(/\./gi))
//console.log(str.match(/\.$/gi)) //str의 가장 끝 부분에서 마침표 유무를 확인
// console.log(str.match(/\.$/gim)) //줄바꿈이 되어 있는 각각의 줄에서 끝나는 부분에 마침표가 있는지 확인

// // 예제
// console.log(str.match(/d$/gm))
// console.log(str.match(/^T/gm))
// console.log(str.match(/h..p/g))
// console.log(str.match(/fox|dog/g))
// console.log(str.match(/https?/g))

// console.log(str.match(/d{2}/))
// console.log(str.match(/d{2,}/))
// console.log(str.match(/d{2,3}/g))
// console.log(str.match(/\b\w{2,3}\b/g))


// console.log(str.match(/[fox]/g))
// console.log(str.match(/[0-9]/g))
// console.log(str.match(/[0-9]{1,}/g))
// console.log(str.match(/[가-힣]{1,}/g))

// console.log(str.match(/\w/g))
// console.log(
//   str.match(
//     /\bf\w{1,}\b/g
//     )
//   )
// console.log(str.match(/\d{1,}/g))
// console.log(str.match(/\s/g))

// const h = `  the hello world   !
// `
// console.log(h.replace(/\s/g, ''))

const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)



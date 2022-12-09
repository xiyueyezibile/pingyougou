const person = {
  name: 'bbh',
  age: 30,
  address: {
    city: 'ChongQing',
    area: 'NanShan',
  },
  title: ['student', { year: 2022, title: 'GoodStudent' }],
}

// 你的代码
let {
  name,
  age,
  address,
  title: [title1, { year, title }],
  mountain: mountain = 'NanShan',
  title2: title2 = '',
} = person
const { city, area } = address
;[year, age] = [age, year]
;[title, title2] = [title2, title]

console.log(name) // bbh
console.log(year) // 30
console.log(city) // ChongQing
console.log(mountain) // NanShan //这里没有写错，就是要输出NanShan，结合课件
console.log(title1) // student
console.log(title2) // GoodStudent

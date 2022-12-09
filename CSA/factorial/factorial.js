let factorial = (m) => {
  let sum = 1
  for (let i = 1; i <= m; i++) {
    sum *= i
  }
  return sum
}
console.log(factorial(10))
let factorial2 = (m) => {
  if (m == 1) return 1
  return m * factorial2(m - 1)
}
console.log(factorial2(10))

var sum = (...nums) => {
  let sum = 1
  for (let i = 0; i < nums.length; i++) {
    sum *= nums[i]
  }
  return sum
}
console.log(sum(1, 2, 3, 4, 5, 6))

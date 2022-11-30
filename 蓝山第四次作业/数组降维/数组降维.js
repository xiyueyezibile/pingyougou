let arr = [1, 2, [3, 4, 5, [6, 7], [8, 9, [10]]], [11, 12]]
// 第一种方法
let nums = []
let s = 0
function ji(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] instanceof Array) {
      ji(arr1[i])
      continue
    }
    nums.push(arr1[i])
    s++
  }
}
ji(arr)

console.log(nums)

// 第二种方法
const arr2 = arr.toString().split(',')
for (let i = 0; i < arr2.length; i++) {
  arr2[i] *= 1
}
console.log(arr2)

// 第三种方法
const arr3 = arr.join().split(',')

for (let i = 0; i < arr3.length; i++) {
  arr3[i] *= 1
}
console.log(arr3)

// 第四种方法
const arr4 = (arr3 + '').split(',')
for (let i = 0; i < arr4.length; i++) {
  arr4[i] *= 1
}
console.log(arr4)

//仿写call方法

var fname = '1'

dd = {
  fname: '2',
}

Function.prototype.myCall = function (first, ...nums) {
  //改变this指向部分
  //判断传入
  if (!first) {
    first = window
    first.fn = this //this为fng()，让它指向window
  } else {
    first.fn = this //this为fng()，改变this指向，让他指向first
  }

  let res = first.fn(...nums)

  //删除，防止越来越多
  delete first.fn
  return res
}

function fng(a, b, c) {
  console.log(a + b + c)
  console.log(this.fname)
  console.log(this)
}

fng(1, 2, 3)
fng.myCall(dd, 1, 2, 3)

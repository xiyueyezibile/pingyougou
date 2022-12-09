let array = [
  { id: 1, title: 'js数组方法1' },
  { id: 2, title: 'js数组方法2' },
  { id: 3, title: 'js数组方法3' },
]

let res = array.map((item) => item.id)
console.log(res) // [1,2,3]

Array.prototype.myMap = function (fn) {
  let newarr = []
  for (let i = 0; i < this.length; i++) {
    newarr.push(fn(this[i], i, this))
  }
  return newarr
}

let res2 = array.myMap((item) => item.id)
console.log(res2)

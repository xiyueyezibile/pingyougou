// 浅拷贝
let obj = {
  name: '张三',
  age: 18,
}

let obj2 = {}
for (let key in obj) {
  obj2[key] = obj[key]
}
obj.name = '李四'
console.log(obj2)
// 浅拷贝只能拷贝第一层

// 深拷贝
let obj3 = {
  name: '张三',
  age: 18,
  gray: {
    fname: '王',
  },
}
let newarr1 = {}
function deepClone(newarr, arr) {
  for (let key in arr) {
    let value = arr[key] //接受值
    if (value instanceof Array) {
      newarr[key] = [] //创建名字为key的空数组
      deepClone(newarr[key], value)
    } else if (value instanceof Object) {
      newarr[key] = {} //创建名字为key的空对象
      deepClone(newarr[key], value)
    } else {
      newarr[key] = value //赋值
    }
  }
}
//不能解决循环引用
deepClone(newarr1, obj3)
obj3.gray.fname = '李'
console.log(newarr1)

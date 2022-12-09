let obj1 = {
  name: '张三',
}
console.log(obj1.name)
let obj2 = new Object({ name: '李四' })
console.log(obj2.name)
class OBJ {
  name = '公共'
}
let obj3 = new OBJ()
console.log(obj3.name)

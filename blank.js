var obj = { uname:'张三丰',age:18,sex:'男',sayHi:function(){ console.log(hi)}};
console.log(obj.uname);
function Star(uname,age,sex)
{
    this.uname = uname,
    this.age = age,
    this.sex = sex,
     this.fun = function(){}
}
var ldh = new Star('刘德华',18,'男');

console.log(ldh.uname,ldh.sex);
for(var k in ldh)
{
    console.log(k);//得到属性名
    console.log(ldh[k]);//不能用ldh.k
}
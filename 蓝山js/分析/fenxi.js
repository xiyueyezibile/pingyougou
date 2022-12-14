console.log('1') //(1)栈，最先打印
//异步，排入宏队列1
setTimeout(function () {
  console.log('2')
  Promise.resolve().then(() => {
    console.log('3')
  })
  new Promise(function (resolve) {
    console.log('4')
    resolve()
  }).then(function () {
    console.log('5')
  })
})
//异步，排入微队列1
Promise.resolve().then(() => {
  console.log('6')
})
new Promise(function (resolve) {
  console.log('7') //栈2
  resolve()
}).then(function () {
  console.log('8') //异步，排入微队列2
})
//异步，排入宏队列2
setTimeout(function () {
  console.log('9')
  Promise.resolve().then(() => {
    console.log('10')
  })
  new Promise(function (resolve) {
    console.log('11')
    resolve()
  }).then(function () {
    console.log('12')
  })
})
/*
    栈最先打印1，7，然后清除微任务队列，6，8，然后执行宏任务1，先打印同步代码2，4，然后在依次打印进入微任务队列的3，5.
    然后执行宏任务2，打印同步代码9，11，最后打印微任务队列中的10，12
*/

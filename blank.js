let step = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('前端太有趣了！')
    }, time)
  })
}
async function demo() {
  let word = await step(500)
  console.log(word) //前端太有趣了！
}
demo()

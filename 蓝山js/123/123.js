function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('1')
      resolve()
    }, 1000)
  })
}
fn()
  .then(() => {
    setTimeout(() => {
      console.log('2')
    }, 1000)
  })
  .then(() => {
    setTimeout(() => {
      console.log('3')
    }, 2000)
  })
setInterval(() => {
  fn()
    .then(() => {
      setTimeout(() => {
        console.log('2')
      }, 1000)
    })
    .then(() => {
      setTimeout(() => {
        console.log('3')
      }, 2000)
    })
}, 3000)



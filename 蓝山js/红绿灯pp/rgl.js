let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
console.log(red)
function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      red.className = 'red1'
      yellow.className = 'yellow1'
      resolve()
    }, 3000)
  })
}
fn()
  .then(() => {
    setTimeout(() => {
      yellow.className = 'yellow'
      green.className = 'green1'
    }, 2000)
  })
  .then(() => {
    setTimeout(() => {
      green.className = 'green'
      red.className = 'red'
    }, 3000)
  })
setInterval(() => {
  fn()
    .then(() => {
      setTimeout(() => {
        yellow.className = 'yellow'
        green.className = 'green1'
      }, 2000)
    })
    .then(() => {
      setTimeout(() => {
        green.className = 'green'
        red.className = 'red'
      }, 3000)
    })
}, 6000)

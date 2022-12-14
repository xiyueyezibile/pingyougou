function red() {
  div.style.backgroundColor = 'red'
}
function green() {
  div.style.backgroundColor = 'green'
}
function yellow() {
  div.style.backgroundColor = 'yellow'
}

const div = document.querySelector('div')
function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      yellow()
      resolve()
    }, 3000)
  })
}
fn()
  .then(() => {
    setTimeout(() => {
      green()
    }, 2000)
  })
  .then(() => {
    setTimeout(() => {
      red()
    }, 3000)
  })
setInterval(() => {
  fn()
    .then(() => {
      setTimeout(() => {
        green()
      }, 2000)
    })
    .then(() => {
      setTimeout(() => {
        red()
      }, 3000)
    })
}, 6000)

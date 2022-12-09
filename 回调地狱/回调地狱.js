const div = document.querySelectorAll('div')

//回调地狱写法

// let red = document.querySelector('.r')
// console.log(red)
// const gre = document.querySelector('.g')
// const blu = document.querySelector('.b')

// let r = setInterval(function m() {
//   div[0].style.left = div[0].offsetLeft + 1 + 'px'
//   if (div[0].offsetLeft % 300 == 0) {
//     clearInterval(r)
//     let g = setInterval(() => {
//       div[1].style.left = div[1].offsetLeft + 1 + 'px'
//       if (div[1].offsetLeft % 300 == 0) {
//         clearInterval(g)
//         let b = setInterval(() => {
//           div[2].style.left = div[2].offsetLeft + 1 + 'px'
//           if (div[2].offsetLeft % 300 == 0) {
//             clearInterval(b)
//             r = setInterval(m, 30)
//           }
//         }, 30)
//       }
//     }, 30)
//   }
// }, 30)

//Promise写法
let t = 30

function rgb1() {
  return new Promise((resolve, reject) => {
    setTimeout(r1, t)
    resolve()
  })
}
function r1() {
  div[0].style.left = div[0].offsetLeft + 1 + 'px'
  if (div[0].offsetLeft % 300 == 0) {
    return
  }
  setTimeout(r1, 30)
}
function g2() {
  div[1].style.left = div[1].offsetLeft + 1 + 'px'
  if (div[1].offsetLeft % 300 == 0) {
    return
  }
  setTimeout(g2, 30)
}
function b3() {
  div[2].style.left = div[2].offsetLeft + 1 + 'px'
  if (div[2].offsetLeft % 300 == 0) {
    return
  }
  setTimeout(b3, 30)
}
rgb1()
  .then(() => {
    setTimeout(() => {
      div[1].style.left = div[1].offsetLeft + 1 + 'px'
      g2()
    }, t + 9000)
  })
  .then(() => {
    setTimeout(() => {
      div[2].style.left = div[2].offsetLeft + 1 + 'px'
      b3()
    }, t + 18000)
  })
  .then(() => {
    setTimeout(() => {}, t + 27000)
  })
setInterval(() => {
  rgb1()
    .then(() => {
      setTimeout(() => {
        div[1].style.left = div[1].offsetLeft + 1 + 'px'
        g2()
      }, t + 9000)
    })
    .then(() => {
      setTimeout(() => {
        div[2].style.left = div[2].offsetLeft + 1 + 'px'
        b3()
      }, t + 18000)
    })
    .then(() => {
      setTimeout(() => {}, t + 27000)
    })
}, 27030)

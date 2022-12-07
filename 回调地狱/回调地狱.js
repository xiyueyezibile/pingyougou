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

function m() {
  div[0].style.left = div[0].offsetLeft + 1 + 'px'
}

let p = new Promise((resolve) => {
  let r = setInterval(m, 30)
  resolve('成功')
})
  .then(() => {
    if (div[0].offsetLeft % 300 == 0) {
      console.log('1')
      clearInterval(r)
    }
  })

  .then((data) => {
    let g = setInterval(() => {
      div[1].style.left = div[1].offsetLeft + 1 + 'px'
      if (div[1].offsetLeft % 300 == 0) {
        clearInterval(g)
        return '成功'
      }
    }, 30)
  })
  .then(() => {
    let b = setInterval(() => {
      div[2].style.left = div[2].offsetLeft + 1 + 'px'
      if (div[2].offsetLeft % 300 == 0) {
        clearInterval(b)
        return '成功'
      }
    }, 30)
  })
  .then(m)

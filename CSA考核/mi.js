const left = document.querySelector('#left')
const right = document.querySelector('#right')

const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
const ul = document.querySelector('#circle')
const li = ul.querySelectorAll('li')
console.log(img1)

function clearcircle() {
  for (let i of li) {
    i.className = ''
  }
}

let flag = [0, 1, 2, 3]
let current = flag[1]
let currentli = flag[1]
let change = 0
left.addEventListener('click', () => {
  change = 1
  clearcircle()
  if (current == flag[1]) {
    li[2].className = 'black'
    currentli = flag[3]
    img1.style.opacity = 1
  } else if (current == flag[2]) {
    li[0].className = 'black'
    img2.style.opacity = flag[1]
    currentli = 1
  } else if (current == flag[3]) {
    li[1].className = 'black'
    img3.style.opacity = flag[2]
    currentli = 2
  }
  const f1 = setInterval(() => {
    // console.log(img1.style.display)

    if (current == flag[1]) {
      // console.log(img1.style.opacity)
      img1.style.opacity -= 0.1
      // console.log(img3.style.opacity)
      img3.style.opacity = 0.5
      if (img1.style.opacity == 0.5) {
        img3.style.opacity = 0.7
      }

      if (img1.style.opacity == 0) {
        img3.style.opacity = 1
        current = flag[3]
        clearInterval(f1)
      }
    } else if (current == flag[2]) {
      img2.style.opacity -= 0.1
      img1.style.opacity = 0.5
      if (img2.style.opacity == 0.5) {
        img1.style.opacity = 0.7
      }
      if (img2.style.opacity == 0) {
        img1.style.opacity = 1
        current = flag[1]
        clearInterval(f1)
      }
    } else if (current == flag[3]) {
      img3.style.opacity -= 0.1
      img2.style.opacity = 0.5
      if (img3.style.opacity == 0.5) {
        img2.style.opacity = 0.7
      }
      if (img3.style.opacity == 0) {
        img2.style.opacity = 1
        current = flag[2]
        clearInterval(f1)
      }
    }
  }, 100)
})

right.addEventListener('click', () => {
  change = 1
  clearcircle()
  if (current == flag[1]) {
    li[1].className = 'black'
    img1.style.opacity = 1
    currentli = 2
  } else if (current == flag[2]) {
    li[2].className = 'black'
    img2.style.opacity = 1
    currentli = 3
  } else if (current == flag[3]) {
    li[0].className = 'black'
    img3.style.opacity = 1
    currentli = 1
  }
  const f1 = setInterval(() => {
    // console.log(img1.style.display)

    if (current == flag[1]) {
      // console.log(img1.style.opacity)
      img1.style.opacity -= 0.1
      // console.log(img3.style.opacity)
      img2.style.opacity = 0.5
      if (img1.style.opacity == 0.5) {
        img2.style.opacity = 0.7
      }

      if (img1.style.opacity == 0) {
        img2.style.opacity = 1
        current = flag[2]
        clearInterval(f1)
      }
    } else if (current == flag[2]) {
      img2.style.opacity -= 0.1
      img3.style.opacity = 0.5
      if (img2.style.opacity == 0.5) {
        img3.style.opacity = 0.7
      }
      if (img2.style.opacity == 0) {
        img3.style.opacity = 1
        current = flag[3]
        clearInterval(f1)
      }
    } else if (current == flag[3]) {
      img3.style.opacity -= 0.1
      img1.style.opacity = 0.5
      if (img3.style.opacity == 0.5) {
        img1.style.opacity = 0.7
      }
      if (img3.style.opacity == 0) {
        img1.style.opacity = 1
        current = flag[1]
        clearInterval(f1)
      }
    }
  }, 100)
})

for (let i = 0; i < 3; i++) {
  li[i].addEventListener('click', () => {
    change = 1
    clearcircle()
    current = i + 1
    li[i].className = 'black'
    if (currentli == flag[1]) {
      img1.style.opacity = 1
    } else if (currentli == flag[2]) {
      img2.style.opacity = 1
    } else {
      img3.style.opacity = 1
    }
    const f1 = setInterval(() => {
      if (current == flag[1]) {
        if (currentli == flag[2]) {
          img2.style.opacity -= 0.1

          img1.style.opacity = 0.5
          if (img2.style.opacity == 0.5) {
            img1.style.opacity = 0.7
          }

          if (img2.style.opacity == 0) {
            currentli = flag[1]
            img1.style.opacity = 1

            clearInterval(f1)
          }
        } else {
          img3.style.opacity -= 0.1

          img1.style.opacity = 0.5
          if (img3.style.opacity == 0.5) {
            img1.style.opacity = 0.7
          }

          if (img3.style.opacity == 0) {
            img1.style.opacity = 1
            currentli = flag[1]
            clearInterval(f1)
          }
        }
      } else if (current == flag[2]) {
        if (currentli == flag[1]) {
          img1.style.opacity -= 0.1
          img2.style.opacity = 0.5
          if (img1.style.opacity == 0.5) {
            img2.style.opacity = 0.7
          }
          if (img1.style.opacity == 0) {
            img2.style.opacity = 1
            currentli = flag[2]
            clearInterval(f1)
          }
        } else {
          img3.style.opacity -= 0.1
          img2.style.opacity = 0.5
          if (img3.style.opacity == 0.5) {
            img2.style.opacity = 0.7
          }
          if (img3.style.opacity == 0) {
            img2.style.opacity = 1
            currentli = flag[2]
            clearInterval(f1)
          }
        }
      } else if (current == flag[3]) {
        if (currentli == flag[2]) {
          img2.style.opacity -= 0.1
          img3.style.opacity = 0.5
          if (img2.style.opacity == 0.5) {
            img3.style.opacity = 0.7
          }
          if (img2.style.opacity == 0) {
            img3.style.opacity = 1
            currentli = flag[3]
            clearInterval(f1)
          }
        } else {
          img1.style.opacity -= 0.1
          img3.style.opacity = 0.5
          if (img1.style.opacity == 0.5) {
            img3.style.opacity = 0.7
          }
          if (img1.style.opacity == 0) {
            img3.style.opacity = 1
            currentli = flag[3]
            clearInterval(f1)
          }
        }
      }
    }, 100)
  })
}

let f2 = setInterval(function fff() {
  if (change) {
    clearInterval(f2)
    f2 = setInterval(fff, 5000)
    change = 0
  }
  clearcircle()
  if (current == flag[1]) {
    li[1].className = 'black'
    img1.style.opacity = 1
    currentli = 2
  } else if (current == flag[2]) {
    li[2].className = 'black'
    img2.style.opacity = 1
    currentli = 3
  } else if (current == flag[3]) {
    li[0].className = 'black'
    img3.style.opacity = 1
    currentli = 1
  }
  const f1 = setInterval(() => {
    if (current == flag[1]) {
      img1.style.opacity -= 0.1

      img2.style.opacity = 0.5
      if (img1.style.opacity == 0.5) {
        img2.style.opacity = 0.7
      }

      if (img1.style.opacity == 0) {
        img2.style.opacity = 1
        current = flag[2]
        clearInterval(f1)
      }
    } else if (current == flag[2]) {
      img2.style.opacity -= 0.1
      img3.style.opacity = 0.5
      if (img2.style.opacity == 0.5) {
        img3.style.opacity = 0.7
      }
      if (img2.style.opacity == 0) {
        img3.style.opacity = 1
        current = flag[3]
        clearInterval(f1)
      }
    } else if (current == flag[3]) {
      img3.style.opacity -= 0.1
      img1.style.opacity = 0.5
      if (img3.style.opacity == 0.5) {
        img1.style.opacity = 0.7
      }
      if (img3.style.opacity == 0) {
        img1.style.opacity = 1
        current = flag[1]
        clearInterval(f1)
      }
    }
  }, 100)
}, 5000)

const leftbody2 = document.getElementsByClassName('leftbody2')
console.log(leftbody2)
const righttopbody2 = document.querySelector('.righttopbody2')
console.log(righttopbody2)
const rightbottombody2 = document.querySelector('.rightbottombody2')
const shoubiao2 = leftbody2[0].querySelector('a')
const shoubiaoimg2 = shoubiao2.querySelector('img')
const xiaotu4 = righttopbody2.querySelectorAll('a')
const xiaotu3 = rightbottombody2.querySelectorAll('a')
console.log('xiaotu3', xiaotu3)
const xiaotu4arr = []
for (let i = 0; i < 4; i++) {
  xiaotu4arr[i] = xiaotu4[i].querySelector('img')
}
const xiaotu3arr2 = []
for (let i = 0; i < 4; i++) {
  xiaotu3arr2[i] = xiaotu3[i].querySelector('img')
  console.log(xiaotu3arr2[i])
}

let flagss = 0
let nowoffsets = 0
shoubiaoimg2.addEventListener('mouseover', () => {
  let f3 = setInterval(() => {
    nowoffsets -= 1
    shoubiao2.style.top = nowoffsets + 'px'
    flagss++
    if (flagss == 2) {
      clearInterval(f3)
      shoubiaoimg2.className = 'shadow'
      shoubiao2.style.top = 2 + 'px'
      nowoffsets = 2

      flagss = 0
    }
  }, 20)
})

shoubiaoimg2.addEventListener('mouseout', () => {
  let f3 = setInterval(() => {
    nowoffsets += 1
    console.log('now', nowoffsets)
    shoubiao2.style.top = nowoffsets + 'px'
    flagss++
    if (flagss == 2) {
      clearInterval(f3)
      shoubiaoimg2.className = ''
      shoubiao2.style.top = 0 + 'px'
      nowoffsets = 0
      flagss = 0
    }
  }, 20)
})

for (let i = 0; i < 4; i++) {
  xiaotu4arr[i].addEventListener('mouseover', () => {
    let f3 = setInterval(() => {
      nowoffsets -= 1
      xiaotu4arr[i].style.top = nowoffsets + 'px'
      console.log('xiaotu4', xiaotu4arr[i])
      flagss++
      if (flagss == 2) {
        xiaotu4arr[i].className = 'shadow'
        xiaotu4arr[i].style.top = 2 + 'px'
        nowoffsets = 2
        clearInterval(f3)
        flagss = 0
      }
    }, 20)
  })

  xiaotu4arr[i].addEventListener('mouseout', () => {
    let f3 = setInterval(() => {
      nowoffsets += 1
      xiaotu4arr[i].style.top = nowoffsets + 'px'
      flagss++
      if (flagss == 2) {
        clearInterval(f3)
        xiaotu4arr[i].className = ''
        xiaotu4arr[i].style.top = 0 + 'px'
        nowoffsets = 0
        flagss = 0
      }
    }, 20)
  })
}

for (let i = 0; i < 4; i++) {
  xiaotu3arr2[i].addEventListener('mouseover', () => {
    let f3 = setInterval(() => {
      nowoffsets -= 1
      xiaotu3arr2[i].style.top = nowoffsets + 'px'
      flagss++
      if (flagss == 2) {
        xiaotu3arr2[i].className = 'shadow'
        xiaotu3arr2[i].style.top = 2 + 'px'
        nowoffsets = 2
        clearInterval(f3)
        flagss = 0
      }
    }, 20)
  })

  xiaotu3arr2[i].addEventListener('mouseout', () => {
    let f3 = setInterval(() => {
      nowoffsets += 1
      xiaotu3arr2[i].style.top = nowoffsets + 'px'
      flagss++
      if (flagss == 2) {
        clearInterval(f3)
        xiaotu3arr2[i].className = ''
        xiaotu3arr2[i].style.top = 0 + 'px'
        nowoffsets = 0
        flagss = 0
      }
    }, 20)
  })
}

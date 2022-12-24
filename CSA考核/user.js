const leftbody = document.getElementsByClassName('leftbody')
console.log(leftbody)
const righttopbody = document.querySelector('.righttopbody')
const rightbottombody = document.querySelector('.rightbottombody')
const shoubiao = leftbody[0].querySelector('a')
const shoubiaoimg = shoubiao.querySelector('img')
const xiaotu = righttopbody.querySelectorAll('a')
console.log(xiaotu)
const xiaotu2 = rightbottombody.querySelectorAll('a')
const xiaotuarr = []
for (let i = 0; i < 4; i++) {
  xiaotuarr[i] = xiaotu[i].querySelector('img')
}
const xiaotuarr2 = []
console.log(xiaotu2)
for (let i = 0; i < 5; i++) {
  xiaotuarr2[i] = xiaotu2[i].querySelector('img')
}

let flags = 0
let over = 1
let nowoffset = 0
shoubiaoimg.addEventListener('mouseover', () => {
  let f1 = setInterval(() => {
    nowoffset -= 1
    console.log(nowoffset)
    shoubiao.style.top = nowoffset + 'px'
    flags++
    if (flags == 2) {
      shoubiaoimg.className = 'shadow'
      shoubiao.style.top = 2 + 'px'
      clearInterval(f1)
      flags = 0
      over = 1
    }
  }, 20)
})

shoubiaoimg.addEventListener('mouseout', () => {
  let f1 = setInterval(() => {
    nowoffset += 1
    console.log(nowoffset)
    shoubiao.style.top = nowoffset + 'px'
    flags++
    if (flags == 2) {
      clearInterval(f1)
      shoubiaoimg.className = ''
      shoubiao.style.top = 0 + 'px'
      flags = 0
      over = 1
    }
  }, 20)
})

for (let i = 0; i < 4; i++) {
  xiaotuarr[i].addEventListener('mouseover', () => {
    let f1 = setInterval(() => {
      nowoffset -= 1
      console.log(nowoffset)
      xiaotuarr[i].style.top = nowoffset + 'px'
      flags++
      if (flags == 2) {
        xiaotuarr[i].className = 'shadow'
        xiaotuarr[i].style.top = 2 + 'px'
        clearInterval(f1)
        flags = 0
        over = 1
      }
    }, 20)
  })

  xiaotuarr[i].addEventListener('mouseout', () => {
    let f1 = setInterval(() => {
      nowoffset += 1
      console.log(nowoffset)
      xiaotuarr[i].style.top = nowoffset + 'px'
      flags++
      if (flags == 2) {
        clearInterval(f1)
        xiaotuarr[i].className = ''
        xiaotuarr[i].style.top = 0 + 'px'
        flags = 0
        over = 1
      }
    }, 20)
  })
}

for (let i = 0; i < 5; i++) {
  xiaotuarr2[i].addEventListener('mouseover', () => {
    let f1 = setInterval(() => {
      nowoffset -= 1
      console.log(nowoffset)
      xiaotuarr2[i].style.top = nowoffset + 'px'
      flags++
      if (flags == 2) {
        xiaotuarr2[i].className = 'shadow'
        xiaotuarr2[i].style.top = 2 + 'px'
        clearInterval(f1)
        flags = 0
        over = 1
      }
    }, 20)
  })

  xiaotuarr2[i].addEventListener('mouseout', () => {
    let f1 = setInterval(() => {
      nowoffset += 1
      console.log(nowoffset)
      xiaotuarr2[i].style.top = nowoffset + 'px'
      flags++
      if (flags == 2) {
        clearInterval(f1)
        xiaotuarr2[i].className = ''
        xiaotuarr2[i].style.top = 0 + 'px'
        flags = 0
        over = 1
      }
    }, 20)
  })
}

const body = document.querySelector('.body')
const body2 = document.querySelector('.body2')
const erji = document.querySelector('.erji')
console.log(erji)
const chuandai = document.querySelector('.chuandai')
console.log(chuandai)
let timer = 0
erji.addEventListener('mouseover', () => {
  chuandai.className = 'chuandai'
  erji.className = 'erji orange'
  if (timer == 1) {
    body.style.display = 'flex'
    body2.style.display = 'none'
    timer = 0
  }
})
chuandai.addEventListener('mouseover', () => {
  chuandai.className = 'chuandai orange'
  erji.className = 'erji'
  if (timer == 0) {
    body.style.display = 'none'
    body2.style.display = 'flex'
    timer = 1
  }
})

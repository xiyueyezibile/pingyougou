let aside = document.querySelector('aside')
console.log(aside)
let article1 = document.querySelector('#article1')
console.log(article1)
let article2 = document.querySelector('#article2')
console.log(article2)
let change = aside.querySelectorAll('img')
console.log(change)
let lastf = aside.querySelector('.lastf')
console.log(lastf)
let lastj = aside.querySelector('.lastj')
console.log(lastj)
let img1 = article1.querySelector('img')
console.log(img1)
let img2 = article2.querySelector('img')
console.log(img2)
let bqb = document.querySelector('#bqb')
console.log('你好' + bqb)
let bqbimg = bqb.querySelector('img')
console.log(bqbimg)

let flag = 0

change[0].addEventListener('click', function () {
  article1.style.display = 'block'
  article2.style.display = 'none'
  bqb.style.display = 'none'
  flag = 0
})
change[1].addEventListener('click', function () {
  article1.style.display = 'none'
  article2.style.display = 'block'
  bqb.style.display = 'none'
  flag = 0
})

let text1 = article1.querySelector('textarea')
console.log(text1)
let ul1 = article1.querySelector('ul')
console.log(ul1)
let btn1 = article1.querySelector('button')
console.log(btn1)

let text2 = article2.querySelector('textarea')
console.log(text2)
let ul2 = article2.querySelector('ul')
console.log(ul2)
let btn2 = article2.querySelector('button')
console.log(btn2)

btn1.addEventListener('click', function () {
  if (text1 == '') {
  } else {
    let val = text1.value
    lastf.innerHTML = text1.value
    lastj.innerHTML = val
    text1.value = ''
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    li1.innerHTML = '<img src="锦明日海.png" alt="" />&nbsp&nbsp' + '<span>' + val + '</span>'
    li2.innerHTML = '<img src="锦明日海.png" alt="" />&nbsp&nbsp' + '<span>' + val + '</span>'
    ul2.appendChild(li1)
    ul1.appendChild(li2)
  }
})
text1.addEventListener('keyup', function (e) {
  if (text1 == '') {
  } else {
    if (e.key == 'Enter') {
      let val = text1.value
      lastf.innerHTML = text1.value
      lastj.innerHTML = val
      text1.value = ''
      let li1 = document.createElement('li')
      let li2 = document.createElement('li')
      li1.innerHTML = '<img src="锦明日海.png" alt="" />&nbsp&nbsp' + '<span>' + val + '</span>'
      li2.innerHTML = '<img src="锦明日海.png" alt="" />&nbsp&nbsp' + '<span>' + val + '</span>'
      ul2.appendChild(li1)
      ul1.appendChild(li2)
    }
  }
})

btn2.addEventListener('click', function () {
  if (text2 == '') {
  } else {
    let val = text2.value
    lastf.innerHTML = text2.value
    lastj.innerHTML = val
    text2.value = ''
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    li1.innerHTML = '<img src="妃爱.png" alt="" />&nbsp&nbsp' + '<span>' + val + '</span>'
    li2.innerHTML = '<img src="妃爱.png" alt="" />&nbsp&nbsp' + '<span>' + val + '</span>'
    ul2.appendChild(li1)
    ul1.appendChild(li2)
  }
})

text2.addEventListener('keyup', function (e) {
  if (text2 == '') {
  } else {
    if (e.key == 'Enter') {
      let val = text2.value
      lastf.innerHTML = text2.value
      lastj.innerHTML = val
      text2.value = ''
      let li1 = document.createElement('li')
      let li2 = document.createElement('li')
      li1.innerHTML = '<img src="妃爱.png" alt="" />&nbsp&nbsp' + '<span>' + val + '</span>'
      li2.innerHTML = '<img src="妃爱.png" alt="" />&nbsp&nbsp' + '<span>' + val + '</span>'
      ul2.appendChild(li1)
      ul1.appendChild(li2)
    }
  }
})

img1.addEventListener('click', function () {
  if (flag == 0) {
    bqb.style.display = 'block'
    flag = 1
  } else {
    bqb.style.display = 'none'
    flag = 0
  }
})
img2.addEventListener('click', function () {
  if (flag == 0) {
    bqb.style.display = 'block'
    flag = 1
  } else {
    bqb.style.display = 'none'
    flag = 0
  }
})

bqbimg.addEventListener('click', function () {
  if (article1.style.display == '' || article1.style.display == 'block') {
    text1.value = text1.value + '<img src="表情包.png" alt=""></img>'
  } else {
    text2.value = text2.value + '<img src="表情包.png" alt=""></img>'
  }
})

//获取更改用户名样式
const myIndexUsername = document.querySelector('.myIndexUsername')
//我的系列
const myIndexBottomLeftdongtai = document.querySelector('.myIndexBottomLeftdongtai')
const myIndexBottomLefthuida = document.querySelector('.myIndexBottomLefthuida')
const myIndexBottomLeftshiping = document.querySelector('.myIndexBottomLeftshiping')
const myIndexBottomLefttiwen = document.querySelector('.myIndexBottomLefttiwen')
const myIndexBottomLeftwenzhang = document.querySelector('.myIndexBottomLeftwenzhang')
const myIndexBottomLeftzhuanlan = document.querySelector('.myIndexBottomLeftzhuanlan')
const myIndexBottomLeftxiangfa = document.querySelector('.myIndexBottomLeftxiangfa')
const myIndexBottomLeftshoucang = document.querySelector('.myIndexBottomLeftshoucang')
const myIndexBottomLeftguanzhu = document.querySelector('.myIndexBottomLeftguanzhu')
//获取头部
const myIndexBottomLeft = document.querySelector('.myIndexBottomLeft')
const myIndexBottomLeftTop = document.querySelector('.myIndexBottomLeftTop')
const myIndexBottomLeftTopLi = myIndexBottomLeftTop.querySelectorAll('li')
//实时更改用户名
myIndexUsername.innerHTML = localStorage.getItem('username')
//获取跳转编辑个人信息页面按钮
const changeMyResourcebtn = document.querySelector('.myIndexxiala').querySelectorAll('button')[1]
changeMyResourcebtn.addEventListener('click', () => {
  window.location.href = 'https://zhihu.madeindz.work/html/myResource.html'
})
let myIndexBottomLefttiwenflag = 1
for (let i = 0; i < myIndexBottomLeftTopLi.length; i++) {
  myIndexBottomLeftTopLi[i].addEventListener('click', () => {
    myIndexBottomLeft.style.height = '100px'
    myIndexBottomLeftdongtai.style.display = 'none'
    myIndexBottomLefthuida.style.display = 'none'
    myIndexBottomLeftshiping.style.display = 'none'
    myIndexBottomLefttiwen.style.display = 'none'
    myIndexBottomLeftwenzhang.style.display = 'none'
    myIndexBottomLeftzhuanlan.style.display = 'none'
    myIndexBottomLeftxiangfa.style.display = 'none'
    myIndexBottomLeftshoucang.style.display = 'none'
    myIndexBottomLeftguanzhu.style.display = 'none'
    for (let j = 0; j < myIndexBottomLeftTopLi.length; j++) {
      myIndexBottomLeftTopLi[j].className = ''
    }

    myIndexBottomLeftTopLi[i].className = 'strongcu'
    if (i == 0) {
      myIndexBottomLeftdongtai.style.display = 'block'
    } else if (i == 1) {
      myIndexBottomLefthuida.style.display = 'block'
    } else if (i == 2) {
      myIndexBottomLeftshiping.style.display = 'block'
    } else if (i == 3) {
      myIndexBottomLefttiwen.style.display = 'block'
      //查看自己发布的问题
      fetch('https://gogo.madeindz.work:443/api/qa/qsubmited', {
        method: 'get',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.code == '2005') {
            alert('登录过期')
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            window.location.href = 'https://zhihu.madeindz.work'
          }
          console.log(res.message)
          myIndexBottomLeftTopLi[3].innerHTML = '提问 ' + res.message.length
          if (myIndexBottomLefttiwenflag) {
            myIndexBottomLefttiwenflag = 0
            myIndexBottomLeft.style.height = 100 + 80 * res.message.length + 'px'
            const ul = myIndexBottomLefttiwen.querySelector('ul')
            for (let i = 0; i < res.message.length; i++) {
              let li = document.createElement('li')
              li.innerHTML = '<div><a href="javascript:;">' + res.message[i].title + '</a></div>' + '<div>' + res.message[i].CreatedAt + '</div>'
              ul.appendChild(li)
            }
          } else {
            myIndexBottomLeft.style.height = 100 + 80 * res.message.length + 'px'
          }
        })
        .catch((err) => {
          throw new Error(err)
        })
    } else if (i == 4) {
      myIndexBottomLeftwenzhang.style.display = 'block'
    } else if (i == 5) {
      myIndexBottomLeftzhuanlan.style.display = 'block'
    } else if (i == 6) {
      myIndexBottomLeftxiangfa.style.display = 'block'
    } else if (i == 7) {
      myIndexBottomLeftshoucang.style.display = 'block'
    } else if (i == 8) {
      myIndexBottomLeftguanzhu.style.display = 'block'
    }
  })
}

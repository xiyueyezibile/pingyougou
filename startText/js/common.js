// 获取隐藏样式
const sanjiao = document.querySelector('.sanjiao')
const shezhi = document.querySelector('.shezhi')
//获取退出链接
const tuichu = shezhi.querySelectorAll('a')[4]
//获取我的主页链接
const myIndex = shezhi.querySelectorAll('a')[0]
//获取头像
const userimg = document.querySelector('.headimg img')
//获取提问按钮
const tiwen = document.querySelector('.tiwen')
//获取关闭提问界面样式
const cancel = document.querySelector('#cancel')
//获取要更改的样式
const headtiwen = document.querySelector('.headtiwen')
const headback = document.querySelector('.headback')
//获取提问输入框
const headtiwentop = document.querySelector('#headtiwentop')
const headtiwenbottom = document.querySelector('#headtiwenbottom')
//获取发布提问按钮
const sendIssue = document.querySelector('#sendIssue')
//头像点击事件判断数
let userimgflag = 0
//头像点击事件
userimg.addEventListener('click', (e) => {
  e.stopPropagation()
  if (!userimgflag) {
    sanjiao.style.display = 'block'
    shezhi.style.display = 'block'
    userimgflag = 1
  } else {
    sanjiao.style.display = 'none'
    shezhi.style.display = 'none'
    userimgflag = 0
  }
})
document.body.addEventListener('click', () => {
  //对头像点击事件的优化
  if (userimgflag) {
    sanjiao.style.display = 'none'
    shezhi.style.display = 'none'
    userimgflag = 0
  }
})
//退出事件
tuichu.addEventListener('click', () => {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  window.location.href = 'https://zhihu.madeindz.work/'
})
//跳转主页事件
myIndex.addEventListener('click', () => {
  window.location.href = 'https://zhihu.madeindz.work/html/myIndex.html'
})
//打开提问界面
tiwen.addEventListener('click', () => {
  headtiwen.style.display = 'flex'
  headback.style.display = 'block'
})
//关闭提问界面
cancel.addEventListener('click', () => {
  headtiwen.style.display = 'none'
  headback.style.display = 'none'
})
//发布问题
sendIssue.addEventListener('click', () => {
  let reg = headtiwentop.value.trim()
  if (reg.charAt(reg.length - 1) == '?' || reg.charAt(reg.length - 1) == '？') {
    let formdata = new FormData()
    formdata.append('title', headtiwentop.value.trim())
    formdata.append('message', headtiwenbottom.value.trim())
    fetch('https://gogo.madeindz.work:443/api/qa/qcreate', {
      method: 'post',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: formdata,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res.status == '200') {
          alert('发布成功')
          history.go(0)
        }
      })
      .catch((err) => {
        throw new Error(err)
      })
  } else {
    alert('问题还没有带问号')
  }
})

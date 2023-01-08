// 跳转调用函数
function localID(ID) {
  localStorage.setItem('ID', ID)
}
if (localStorage.getItem('token')) {
  //获取渲染样式
  const indexLeftBodyBottomUl = document.querySelector('.indexLeftBodyBottom ul')
  console.log(indexLeftBodyBottomUl)
  //获取整个body区域
  const indexBody = document.querySelector('.indexBody')
  //获取左侧body区域
  const indexLeftBody = document.querySelector('.indexLeftBody')
  //获取右侧body区域
  const indexRightBody = document.querySelector('.indexRightBody')
  //固定滚动
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 1080) {
      const i = (document.body.offsetWidth - indexBody.offsetWidth) / 2
      const x = document.body.offsetWidth - i - indexRightBody.offsetWidth
      indexRightBody.style.position = 'fixed'
      indexRightBody.style.left = x + 'px'
      indexRightBody.style.top = -1023 + 'px'
    } else {
      indexRightBody.style.position = 'relative'
      indexRightBody.style.left = ''
      indexRightBody.style.top = ''
    }
  })
  //随机问题
  fetch('https://gogo.madeindz.work:443/api/qa/randquestions', {
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      if (res.status == '200') {
        indexLeftBody.style.height = 59 + 100 * res.random.length + 'px'
        for (let i = 0; i < res.random.length; i++) {
          let li = document.createElement('li')
          li.innerHTML = '<a href="http://zhihu.madeindz.work/html/issue.html" onclick="localID(' + res.random[i].ID + ')">' + res.random[i].title + '</a>'
          indexLeftBodyBottomUl.appendChild(li)
        }
        console.log(indexLeftBodyBottomUl)
      }
    })
    .catch((err) => {
      throw new Error(err)
    })
} else {
  alert('登录过期')
  window.location.href = 'http://zhihu.madeindz.work/'
}

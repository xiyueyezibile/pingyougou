//获取用户信息
fetch('https://gogo.madeindz.work:443/api/user/getuserinformation', {
  method: 'get',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res)
    if (res.code == '2005') {
      alert('登录过期')
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      window.location.href = 'https://zhihu.madeindz.work'
    }
    if (res.information.gender == '男') {
      myResourceGender.innerHTML = '男'
      myResourceGendermale.checked = true
    } else if (res.information.gender == '女') {
      myResourceGender.innerHTML = '女'
      myResourceGenderfemale.checked = true
    }
    myResourcejianjie.innerHTML = res.information.sign
  })
//获取要加载的样式
const myResourceUsername = document.querySelector('.myResourceUsername')
const myResourceGender = document.querySelector('.myResourceGender')
const myResourcejianjie = document.querySelector('.myResourcejianjie')
const myResourceGendermale = document.querySelector('#myResourceGendermale')
const myResourceGenderfemale = document.querySelector('#myResourceGenderfemale')
//获取要更改的样式
const myResourceUsernameHidden = document.querySelector('.myResourceUsernameHidden')
const myResourceChanges = document.querySelectorAll('.myResourceChange')
const myResourceGenderForm = document.querySelector('.myResourceGenderForm')
const myResourcejianjieForm = document.querySelector('.myResourcejianjieForm')
const myResourcemimaForm = document.querySelector('.myResourcemimaForm')
const myResourcemima = document.querySelector('.myResourcemima')
const myResourceBodyBotton = document.querySelector('.myResourceBodyBotton')
const myResourceli = myResourceBodyBotton.querySelector('ul').querySelectorAll('li')[3]
//获取点击事件样式
const myResourceProtects = document.querySelectorAll('.myResourceProtect')
//获取输入框
const myResourceUsername_ = document.querySelector('#myResourceUsername')
const myResourcejianjie_ = document.querySelector('#myResourcejianjie')
const myResourcepassword_ = document.querySelector('#myResourcepassword')
const myResourcenewpassword_ = document.querySelector('#myResourcenewpassword')
const myResourceCode_ = document.querySelector('#myResourceCode')
//获取获取短信验证码按钮
const myResourceGetcode = document.querySelector('#myResourceGetcode')
//修改为当前用户用户名
myResourceUsername.innerHTML = localStorage.getItem('username')
myResourceUsername_.value = localStorage.getItem('username')

//第一个表单逻辑
myResourceChanges[0].addEventListener('click', () => {
  myResourceChanges[0].style.display = 'none'
  myResourceUsername.style.display = 'none'
  myResourceUsernameHidden.style.display = 'flex'
})
myResourceProtects[0].addEventListener('click', (e) => {
  e.preventDefault()
  if (!myResourceUsername_.value.trim()) {
    return
  }
  let formdata = new FormData()
  formdata.append('username', myResourceUsername_.value.trim())
  fetch('https://gogo.madeindz.work:443/api/user/informationmodify', {
    method: 'put',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    body: formdata,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      console.log(res.status)
      if (res.status == '200') {
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        window.location.href = 'https://zhihu.madeindz.work/'
        history.go(0)
      }
    })
    .catch((err) => {
      throw new Error(err)
    })
})
//第二个表单逻辑
myResourceChanges[1].addEventListener('click', () => {
  myResourceChanges[1].style.display = 'none'
  myResourceGender.style.display = 'none'
  myResourceGenderForm.style.display = 'inline-block'
})
myResourceProtects[1].addEventListener('click', (e) => {
  e.preventDefault()
  let gender = ''
  if (myResourceGendermale.checked) {
    gender = myResourceGendermale.value
  } else {
    gender = myResourceGenderfemale.value
  }
  let formdata = new FormData()
  formdata.append('gender', gender)
  fetch('https://gogo.madeindz.work:443/api/user/informationmodify', {
    method: 'put',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    body: formdata,
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == '200') {
        history.go(0)
      }
    })
    .catch((err) => {
      throw new Error(err)
    })
})
//第三个表单逻辑
myResourceChanges[2].addEventListener('click', () => {
  myResourceChanges[2].style.display = 'none'
  myResourcejianjie.style.display = 'none'
  myResourcejianjieForm.style.display = 'inline-block'
})
myResourceProtects[2].addEventListener('click', (e) => {
  e.preventDefault()
  let formdata = new FormData()
  formdata.append('sign', myResourcejianjie_.value)
  fetch('https://gogo.madeindz.work:443/api/user/informationmodify', {
    method: 'put',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    body: formdata,
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == '200') {
        history.go(0)
      }
    })
    .catch((err) => {
      throw new Error(err)
    })
})
// 第四个表单逻辑
myResourceChanges[3].addEventListener('click', () => {
  myResourceChanges[3].style.display = 'none'
  myResourcemima.style.display = 'none'
  myResourcemimaForm.style.display = 'inline-block'
  myResourceBodyBotton.style.height = '800px'
  myResourceli.style.height = '200px'
})
myResourceProtects[3].addEventListener('click', (e) => {
  if (myResourcepassword_.value == '' || myResourcenewpassword_.value == '' || myResourceCode_.value == '') {
  } else {
    e.preventDefault()
    let formdata = new FormData()
    formdata.append('newpassword', myResourcepassword_.value)
    formdata.append('confirm', myResourcenewpassword_.value)
    formdata.append('code', myResourceCode_.value)
    fetch('https://gogo.madeindz.work:443/api/user/changepassword', {
      method: 'put',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: formdata,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status == '200') {
          alert('修改成功')
        }
      })
      .catch((err) => {
        throw new Error(err)
      })
  }
})
//获取验证码
myResourceGetcode.addEventListener('click', (e) => {
  e.preventDefault()
  fetch('https://gogo.madeindz.work:443/api/user/getcode', {
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      if (res.status == '200') {
        let flag = 300
        setTimeout(function fn() {
          myResourceGetcode.innerHTML = flag + '后可重新发送'
          flag--
          if (flag == 0) {
            myResourceGetcode.innerHTML = '可发送验证码'
            return
          }
          setTimeout(fn, 1000)
        }, 1000)
      }
    })
    .catch((err) => {
      throw new Error(err)
    })
})

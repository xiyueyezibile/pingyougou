//获取顶部三个按钮
const issueTopInnerBottom = document.querySelector('.issueTopInnerBottom')
const issueTopInnerBottombtns = issueTopInnerBottom.querySelectorAll('button')
//获取编辑器
const issuebianjiqi = document.querySelector('.bianjiqi')
//获取渲染样式
const issueTopInnerCenter = document.querySelector('.issueTopInnerCenter')
const issueBottomLeftTopLeft = document.querySelector('.issueBottomLeftTopLeft')
const issueBottomLeftBottomUl = document.querySelector('.issueBottomLeftBottom ul')
//编辑器点击出现
issueTopInnerBottombtns[1].addEventListener('click', () => {
  issuebianjiqi.style.display = 'block'
})
//发表回答
const issuebianjiqiBottom = document.querySelector('.bianjiqiBottom')
const issuebianjiqiTop = issuebianjiqi.querySelector('.bianjiqiTop')
const issuebianjiqiTopbtns = issuebianjiqiTop.querySelectorAll('button')
issuebianjiqiTopbtns[8].addEventListener('click', () => {
  let formdata = new FormData()
  formdata.append('question_id', localStorage.getItem('ID'))
  formdata.append('message', issuebianjiqiBottom.innerHTML)
  fetch('https://gogo.madeindz.work:443/api/qa/acreate', {
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
})
//获取渲染信息
window.addEventListener('load', () => {
  let url = 'https://gogo.madeindz.work:443/api/qa/seequestioninformation?id=' + localStorage.getItem('ID') + '&secret=123456'
  fetch(url, {
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      if (res.status == '200') {
        if (res.question.Answers == null) {
          issueTopInnerCenter.innerHTML = res.question.title + '<div>' + res.question.message + '</div>'
        } else {
          issueBottomLeftTopLeft.innerHTML = res.question.Answers.length + '个回答'
          issueTopInnerCenter.innerHTML = res.question.title + '<div>' + res.question.message + '</div>'
          for (let i = 0; i < res.question.Answers.length; i++) {
            let li = document.createElement('li')
            li.innerHTML = '<div><a href="javascript:;"><strong>' + res.question.Answers[i].Answerer + '</strong></a></div>' + res.question.Answers[i].message
            issueBottomLeftBottomUl.appendChild(li)
          }
        }
      }
    })
    .catch((err) => {
      throw new Error(err)
    })
})

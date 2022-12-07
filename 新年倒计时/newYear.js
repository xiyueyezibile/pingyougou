function conutDown(time) {
  let nowTime = +new Date() //返回当前时间的总的毫秒数
  let inputTime = +new Date(time) //返回用户输入时间的总的毫秒数
  let times = (inputTime - nowTime) / 1000 //times是剩余时间总的秒数
  return times
}
// 防止刷新空白
show()
setInterval(show, 1000)
function show() {
  // 计算时分秒
  let seconds = conutDown('January 1,2023 00:00:00')
  let days = parseInt(seconds / (60 * 60 * 24))
  let hours = parseInt((seconds / (60 * 60)) % 24)
  let minutes = parseInt((seconds / 60) % 60)
  seconds = parseInt(seconds % 60)
  //   获取元素
  let day = document.getElementById('days')
  let hour = document.getElementById('hours')
  let minute = document.getElementById('minutes')
  let second = document.getElementById('seconds')
  //   改变内容
  day.innerHTML = days < 10 ? '0' + days : days
  hour.innerHTML = hours < 10 ? '0' + hours : hours
  minute.innerHTML = minutes < 10 ? '0' + minutes : minutes
  second.innerHTML = seconds < 10 ? '0' + seconds : seconds
}

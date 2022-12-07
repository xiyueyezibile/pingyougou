let img = document.querySelector('img')

document.addEventListener('mousemove', function (e) {
  let x = e.pageX
  let y = e.pageY
  img.style.left = x + 'px'
  img.style.top = y + 'px'
})

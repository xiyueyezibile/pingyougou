let textarea = document.querySelector('textarea')
let btn = document.querySelector('button')
let ul = document.querySelector('ul')
console.log(textarea)
console.log(btn)
console.log(ul)
btn.addEventListener('click', function () {
  if (textarea.value == '') {
  } else {
    let li = document.createElement('li')
    li.innerHTML = '<strong>' + textarea.value + '</strong>' + '<a href="javascript:;">×</a>'
    let va = textarea.value
    let strong = li.querySelector('strong')
    textarea.value = ''
    ul.insertBefore(li, ul.firstElementChild)
    let add = ''
    li.addEventListener('mouseover', function () {
      li.className = 'down'
      strong.className = 'strong' + add
    })
    li.addEventListener('mouseout', function () {
      li.className = ''
      strong.className = '' + add
    })

    let a = li.querySelector('a')

    li.addEventListener('click', function () {
      li.innerHTML = '<span>' + '√' + '<strong>' + va + '</strong>' + '</span>' + '<a href="javascript:;">×</a>'
      a = li.querySelector('a')
      strong = li.querySelector('strong')
      add = ' sstrong'
      li.style.textIndent = '0'
      a.addEventListener('click', function () {
        ul.removeChild(a.parentNode)
      })
    })

    a.addEventListener('click', function () {
      ul.removeChild(a.parentNode)
    })
  }
})

document.addEventListener('keyup', function (e) {
  console.log(e.key)
  if (e.key == 'Enter') {
    if (textarea.value == '') {
    } else {
      let li = document.createElement('li')
      li.innerHTML = '<strong>' + textarea.value + '</strong>' + '<a href="javascript:;">×</a>'
      let va = textarea.value
      let strong = li.querySelector('strong')
      textarea.value = ''
      ul.insertBefore(li, ul.firstElementChild)
      let add = ''
      li.addEventListener('mouseover', function () {
        li.className = 'down'
        strong.className = 'strong' + add
      })
      li.addEventListener('mouseout', function () {
        li.className = ''
        strong.className = '' + add
      })

      let a = li.querySelector('a')

      li.addEventListener('click', function () {
        li.innerHTML = '<span>' + '√' + '<strong>' + va + '</strong>' + '</span>' + '<a href="javascript:;">×</a>'
        a = li.querySelector('a')
        strong = li.querySelector('strong')
        add = ' sstrong'
        li.style.textIndent = '0'
        a.addEventListener('click', function () {
          ul.removeChild(a.parentNode)
        })
      })

      a.addEventListener('click', function () {
        ul.removeChild(a.parentNode)
      })
    }
  }
})

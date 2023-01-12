const ul = document.querySelector('ul')
const li = ul.querySelectorAll('li')
const btn = document.querySelector('button')
let m = []
for (let i = 0; i < li.length - 1; i++) {
  m.push(li[i].querySelector('a'))
  li[i].querySelector('a').addEventListener('click', () => {
    window.location.hash = '#' + i

    console.log('11')
  })
}
window.addEventListener('hashchange', () => {
  console.log(window.location.hash)
  li[3].innerHTML = 1
})

var n = prompt('请输入爬楼梯数')
n = parseInt(n)

var i = 0
var method = 0
function dfs(i, n) {
  if (i == n) {
    method++
    return
  } else if (i > n) {
    return
  }

  dfs(i + 1, n)
  dfs(i + 2, n)
  return
}

dfs(i, n)
console.log(method)

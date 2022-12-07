var arr = [1, 2, 3, 4, 3, 4, 3, 5, 5, 6, 4, 1, 1]

function cutRepeat(arr, long) {
  var copy = []

  for (let i = 0; i < long; i++) {
    if (copy.indexOf(arr[i]) === -1) {
      copy.push(arr[i])
    }
  }
  return copy
}

var a = cutRepeat(arr, arr.length)
console.log(a)

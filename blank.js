let arr = prompt().split(',')
function cutRepeat(arr, long) {
  let copy = []

  for (let i = 0; i < long; i++) {
    if (copy.indexOf(arr[i]) === -1) {
      copy.push(arr[i])
    }
  }
  return copy
}
console.log(cutRepeat(arr, arr.length))

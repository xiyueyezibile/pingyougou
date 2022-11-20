var arr = [1, 8, 6, 9, 10, 15, 12]
function bubbleSort(arr) {
  var blank = []
  for (let i = 0; i < arr.length; i++) {
    for (let s = 0; s < i; s++) {
      if (arr[s] > arr[i]) {
        blank[0] = arr[s]
        arr[s] = arr[i]
        arr[i] = blank[0]
      }
    }
  }
  return arr
}
arr = bubbleSort(arr)

console.log(arr)

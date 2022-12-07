add = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
console.log(add(1)(2)(3))

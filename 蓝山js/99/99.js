for (var row = 0; row < 10; row++) {
  var output = ''
  for (var col = 0; col <= row; col++) {
    if (row * col < 10) output = output + row + '*' + col + '=' + row * col + '   '
    else output = output + row + '*' + col + '=' + row * col + '  '
  }
  console.log(output)
}

function forLoop(array) {
  for (let i = 0; i<25; i++) {
    if (i === 1) {
      var string = "I am 1 strange loop."
      array.push(string)
    }
    else {
      var strings= "I am ${i} strange loops."
      array.push(strings)
    }
  }
  return array
}

function whieLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return 'done'
}
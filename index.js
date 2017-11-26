function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
<<<<<<< HEAD
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`
  }

  let arr = [];

  for (var i = 0; i < line.length; i++) {
    arr.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${arr.join(`, `)}`
=======
  return katzDeliLine.length
>>>>>>> 0f7cee33e7cfd155fc1c317e98ae8121189bdd64
}

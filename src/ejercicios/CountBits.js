var countBits = function (n) {
  let binaryNumber = convertToBinary(n).split('')
    .filter(car => car === '1')
  return binaryNumber.length
}

function convertToBinary(decimal) {
  let binary = ""
  let res
  while (decimal !== 0) {
    res = decimal % 2
    decimal = Math.floor(decimal / 2)
    binary += res.toString()
  }
  return binary
}

exports.counterBits = countBits
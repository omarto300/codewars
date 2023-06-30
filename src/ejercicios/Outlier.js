function findOutlier(integers) {
  let pares = integers.filter(number => number % 2 === 0)
  if (pares.length > 1) {
    let impar= integers.filter(number => number % 2 !== 0)
    return impar[0]
  }
  return pares[0]
}

console.log(findOutlier([1, 2, 3]))


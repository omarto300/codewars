function count(string){
  if (string === ''){
    return {}
  }
  var map = new Map()
  string.split('').forEach(value => {
    let counter =1
    if (map.has(value)){
      counter = map.get(value) +1
    }
    map.set(value,counter)
  })
  return Object.fromEntries(map)
}

function countBest(string){
  let count ={}
  string.split('').forEach(c => count[c] ? count[c]++:count[c] =1)
  return count
}
console.log( countBest('AaBbbBCcCcCc'))
console.log(count('AaBbbBCcCcCc'))
console.log({ A: 1, a: 1, B: 2, b: 2, C: 3, c: 3 })

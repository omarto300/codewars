function duplicateCount(text) {
  const map = new Map
  text.toUpperCase().split('').map(letra => {
    let cantidad = 0
    if (map.has(letra)) {
      cantidad += 1
    }
    map.set(letra, cantidad)
  })
  let duplicados = 0
  map.forEach((value) => {
    if (value !== 0) {
      duplicados += 1
    }
  })
  return duplicados
}

// mejor resultado
function duplicateCountBest(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

console.log(duplicateCount("abcde"))
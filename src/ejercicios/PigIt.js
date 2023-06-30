function pigIt(str){
  let words = str.split(' ')
  return words.map(word => {
    if (!word.match(/[^a-zA-Z0-9 ]/g)){
      return word.slice(1)+ word.charAt(0) +'ay'
    }
    return word
  }).join(' ')
}
function pigItBest(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

console.log(pigIt('Pig latin is cool !'))
function domainName(url) {
  let domain = 'icann'
  let bandera = false
  if (url.startsWith('htt')) {
    let fisrt = url.substring(url.indexOf('//') + 2)
    domain = fisrt.substring(0, fisrt.indexOf('.'))
    bandera=true
  }
  if (url.includes('www')) {
    let fisrt = url.substring(url.indexOf('www') + 4)
    domain = fisrt.substring(0, fisrt.indexOf('.'))
    bandera = true
  }

  if (!bandera){
    domain = url.substring(0,url.indexOf('.'))
  }
  return domain
}

console.log(domainName('http://google.com'))
console.log(domainName('www.xakep.ru'))
console.log(domainName('https://5-k3msl7z5jeqgs3ldseh6deqoa16.name/archive/'))
console.log(domainName('https://www.ysjjvo0q6kdtdfp25au3ib.edu/warez/'))
console.log(domainName(' https://www.grf6oqsrvl.biz/index.php'))
console.log(domainName('ib94-ca2-euzeg2ht25.org/default.html'))
console.log(domainName('h8ag8vl3ff5hg.edu/archive/'))
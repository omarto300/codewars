function humanReadable(seconds) {
  let residuo = seconds
  let horas = 0
  let minutos = 0

  if (seconds >= 3600) {
    horas = Math.floor(seconds / 3600)
    residuo = seconds % 3600
  }
  if (residuo >= 60) {
    minutos = Math.floor(residuo / 60)
    residuo = residuo % 60
  }
  horas = horas.toString().padStart(2, '0')
  minutos = minutos.toString().padStart(2, "0")
  let segundos = residuo.toString().padStart(2, '0')
  return `${horas}:${minutos}:${segundos}`;
}

function humanReadableRefactor(seconds) {
  var formatNumber = (number) => number.toString().padStart(2, '0')
  return formatNumber(Math.floor(seconds / 3600)) + ':' +
    formatNumber(Math.floor(seconds / 60) % 60) + ':' +
    formatNumber(seconds % 60)
}

console.log(humanReadableRefactor(359999))
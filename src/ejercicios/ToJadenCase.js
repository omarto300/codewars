String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(palabra => palabra.replace(palabra.charAt(0), palabra.charAt(0).toUpperCase() ))
    .join(' ')
};

console.log('prueba de jadecase'.toJadenCase())
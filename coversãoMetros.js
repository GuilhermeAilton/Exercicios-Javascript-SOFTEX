var readlineSync = require('readline-sync');

var metros= readlineSync.questionFloat('Valor em metros : ')

var converterEmCentimetros = metros * 100


console.log('O valor convertido em centímetros :  ', converterEmCentimetros +" cm")
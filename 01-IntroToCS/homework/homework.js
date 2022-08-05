'use strict'

const { TestWatcher } = require("jest");

function BinarioADecimal(num) {
  // tu codigo aca
  num = num.split ('').reverse ();
  let resultado =0;
 for (let i =0; i < num.length; i++ ){
 resultado = resultado + Math.pow(2,i) * parseInt(num[i])
}
return resultado
 
}


function DecimalABinario(num) {
  // tu codigo aca
  let resultado = []
  while (num > 0){
    resultado.push(num%2)
    num =Math.floor(num/2)
  }
return resultado.reverse().join('') 
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <=1){
    return array
  }
  const pivot = array.shift();
  const left =[];
  const rigth = [];

  while (array.length){
    const items = array.shift()
    if(items <pivot){
      left.push (items)

    }else{
      rigth.push(items)
    }
  }

return quickSort(left).concat(pivot).concat(quickSort(rigth))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.length<=1){
  return array
}
const index = Math.floor(array.length /2)
let left = array.splice (0,index)
let rigth = array
left = mergeSort(left)
rigth =mergeSort(rigth)




const  result =[]
while(left.length && rigth.length){
  if(left[0]<rigth[0]){
  result.push(left.shift())
  }
  else {
    result.push(rigth.shift())
  }
}
if(left.length){
  return result.concat(left)
}
else{
  return result.concat(rigth)
}
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

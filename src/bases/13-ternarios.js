//Operador condicional ternario
//operacion corta de hacer una decision


const activo = true;

// let mensaje ='';

// if(!activo){
//     mensaje ="Activo";
// }else{
//     mensaje ="Inactivo"
// }

//1 forma
const mensaje = (!activo) ? 'Activo' : 'Inactivo';

//2 forma
const mensaje1= (!activo) ? 'Activo':null;
//console.log(mensaje1);

//3 forma
const mensaje3 = !activo && 'Activo';
console.log(mensaje3);
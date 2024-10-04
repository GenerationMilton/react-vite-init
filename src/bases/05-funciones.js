// Funciones en JS

const saludar = function ( nombre){
    return `Hola, ${nombre}`;

}

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
};

const saludar3 = (nombre) =>  `Hola, ${nombre}`;

const saludar4= () => `Hola Mundo`;

//console.log(saludar('Goku'))

console.log(saludar);
console.log(saludar2('Vegeta'));
console.log(saludar2('Goku'));
console.log(saludar4());


const getUser = () =>({
    uid: 'ABC123',
    username:'El_Papi1502'
});

const user = getUser();
console.log(user);

// Tarea
//1. Transformar a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
const getUsuarioActivo = (nombre) => 
    ({
        uid:'abc567',
        username: nombre
    });

//const usuarioActivo = getUsuarioActivo('Milton');
const usuario = getUsuarioActivo('Jhon');
console.log(usuario);
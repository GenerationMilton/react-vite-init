import getHeroeById, { getHeroesByOwner } from "../bases/08-imp-exp";

console.log(getHeroesByOwner);

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         //console.log('2 segundos despues');
//         //resolve();
//         //Importa el heroe 
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         reject('No se pudo encontrar el heroe');
//     }, 2000)
// });

// promesa.then( (heroe)=> {
//     console.log('heroe', heroe)
// })
// .catch(err=> console.warn(err));

const getHeroeByIdAsinc =(id) =>{

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            //console.log('2 segundos despues');
            //resolve();
            //Importa el heroe 
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            } else{
                reject('No se pudo encontrar el heroe');
            }
            
            
        }, 2000)
    });

    
}

getHeroeByIdAsinc(10)
    .then(heroe => console.log('heroe', heroe))
    .catch(err => console.warn(err))

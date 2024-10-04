//import { heroes } from './data/heroes.js';
//import { heroes } from "./data/heroes";
//import {heroes} from './data/heroes' //imp + tab
//import heroes, { owners } from "./data/heroes"; //export por default y export individuales
import heroes, { owners } from "../data/heroes";

console.log(owners);

// const getHeroeById =(id) =>{
//     return heroes.find((heroe)=> {
//         if( heroe.id === id){
//             return true;
//         } else{
//             return false;
//         }
//     });
// }


const getHeroeById =(id) => heroes.find( (heroe) => heroe.id === id);

//console.log( getHeroeById(3));

//find? , filter
//
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

//console.log(getHeroesByOwner('Marvel'));

export default getHeroeById;

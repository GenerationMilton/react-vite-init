import { getHeroeById, getHeroesByOwner } from "../../src/bases/08-imp-exp-test";
describe('Prueba en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un heroe por ID',()=>{
        
        const id=1;
        const hero= getHeroeById(id);
       
        expect(hero).toEqual({id:1, name:'Batman', owner:'DC'})


    });

    test('getHeroeById debe de retornar undefined si no existe',()=>{
        
        const id=100;
        const hero= getHeroeById(id);
        expect(hero).toBeFalsy();
       


        

    });

    //Tarea:
    //Debe de retornar un arreglo con lo heroes de DC
    //Length === 3
    //toEqual al arreglo filtrado
    test('getHeroesByOwner debe de regresas heroes de DC', () => {
        const owner ='DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect(heroes).toEqual(heroes.filter((heroe)=> heroe.owner))
    });


    test('getHeroesByOwner debe de regresas heroes de Marvel', () => {
        const owner ='Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
    
        expect(heroes).toEqual(heroes.filter((heroe)=> heroe.owner))
        console.log(heroes)
    });




    //debe de retornar un arreglo con los heroes de Marvel
    //length ===2
});
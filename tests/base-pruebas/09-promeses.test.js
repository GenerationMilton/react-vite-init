import { getHeroeByIdAsinc } from "../../src/bases/09-promesas-test";

describe('Pruebas en 09-promesas', () => {
    test('getHeroesByIdAsync debe de retornar un heroe', (done)=>{


        const id =1;
        getHeroeByIdAsinc(id)
            .then(hero=>{

                expect(hero).toEqual({
                    id:1,
                    name:'Batman',
                    owner:'DC'
                });

                done();
            });

    });


    test('getHeroesByIdAsync debe de obtener un error si heroe no existe', (done)=>{


        const id =100;
        getHeroeByIdAsinc(id)
            .then( hero=> {
                expect(hero).toBeFalsy();
                done();
            })
           .catch(error => {

            expect(error).toBe(`No se pudo encontrar el heroe ${id}`)

            done();
           });

    });


});
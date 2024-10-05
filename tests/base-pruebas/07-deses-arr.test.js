import { retornaArregloTest } from "../../src/bases/07-deses-ob-test";

describe('Pruebas en 07-deses-arr',()=>{
    test('debe de retornar un string y un numero', ()=>{

        const[letters,numbers]= retornaArregloTest();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        expect(letters).toEqual(expect.any(String));
        

    });
})
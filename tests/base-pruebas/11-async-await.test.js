import { getImage } from "../../src/bases/11-async-await-test";

describe('Pruebas en 11-async-await.js', () => {
    test('getImage debe de returnar URL de las imagenes',async()=> {

        const url = await getImage();

        expect(typeof url).toBe('string');

    });
   
});
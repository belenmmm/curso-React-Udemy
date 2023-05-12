import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('pruebas en 08-imp-exp', () => {

    test('getHeroeById debe retornar un heroe por ID', () =>{

        const id = 1;
        const hero = getHeroeById(id);
        
        expect(hero).toEqual({id:1, name:'Batman', owner:'DC'})

    });

    test('getHeroeById debe retornar undefined si no existe', () =>{

        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
        
        //expect(hero).toEqual({id:1, name:'Batman', owner:'DC'})

    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () =>{

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        //console.log(hero);

        //expect(hero).toBeFalsy();
        
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner));

    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () =>{

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        //console.log(hero);

        //expect(hero).toBeFalsy();
        
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner));

    });



    

})
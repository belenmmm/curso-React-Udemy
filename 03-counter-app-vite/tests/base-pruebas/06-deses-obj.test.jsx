import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe ('Pruebas en 06-deses-obj', () => { 

    test('usContext debe de retornar un objeto', () => {
        

        const secreto ='lalala';
        //const queedad= 23;
 
        const user = usContext(secreto);

        expect(user).toEqual({
            nombreClave: secreto,
            anios: queedad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });     
    
       
    });
});
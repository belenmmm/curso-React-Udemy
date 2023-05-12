import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => { 

     /* test('debe de hacer match con el snapshot', () => { 

        const title = 'Hola, soy Goku';

        const {container} = render(<FirstApp title={title}/>);

        console.log(container);

        expect(container).toMatchSnapshot();

     });  */

     test('debe mostrar el titulo en un h1', () => { 
        
        const title = 'Hola, soy Goku';

        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);

        expect(getByText(title)).toBeTruthy();

        //const h1 = container.querySelector('h1');

        //en este spect compara y tiene en cuenta los espacios, si <h1> { title } </h1> tiene espacios entre el tag y el contenido lo
        //cuenta y la prueba va a fallar
        //expect(h1.innerHTML).toBe(title)

        //usando toContain nos aseguramos de que no tenga en cuenta los espacios y sólo evalue si el contenido coincide, en este caso, si es el mismo texto

        //expect(h1.innerHTML).toContain(title)

        expect(getByTestId('test-title').innerHTML).toContain(title)

     });

     test('debe de mostrar el subtitulo enviado por props', () => { 
        
        const title = 'Hola, soy Goku';

        const subTitle = 'Soy un subtitulo';

        const {getAllByText} = render(
            <FirstApp 
                title={title}
                subTitle={subTitle}
            />
        );

        expect(getAllByText(subTitle).length).toBe(2);
      })



 })
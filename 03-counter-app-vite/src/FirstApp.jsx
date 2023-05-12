
import PropTypes from 'prop-types';

/* const holaTarola = () => {
    return 'Hola tarola!';
} */

/* const newMessage = {
    message: 'Hola Mundo',
    title: 'Fernando'
}; */

export const FirstApp = ( {title, subTitle, name } ) => {

    //console.log(props);
    return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
    )
  }


  FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
  }

  FirstApp.defaultProps = {
    name: 'Belen',
    subTitle: 'No hay subtítulo',
    title: 'No hay titulo',  
  }

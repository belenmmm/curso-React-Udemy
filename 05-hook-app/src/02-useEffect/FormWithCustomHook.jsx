import { useEffect } from "react";
import { useForm } from "../hooks/useForm";




export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''

    });

    //const { username,email, password } = formState

    /* const [formState, setFormState ] = useState({
        username: '',
        email: '',
        password: ''

    });

    const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value

        })

    } */

  /*   useEffect( () => {
        console.log('useEffect called');

    }, []);

    useEffect( () => {
        console.log('formState changed');

    }, [formState]);

    useEffect( () => {
        console.log('email changed');

    }, [email]); */

   
    

  return (
   <>

        <h1>Formulario con custom hook</h1>
        <hr />

        <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
        ></input>

        <input type="email"
        className="form-control mt-2"
        placeholder="belen@google.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
        ></input>

        <input type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={ password }
        onChange={ onInputChange }
        ></input>

        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>

        

   </>
  )
}

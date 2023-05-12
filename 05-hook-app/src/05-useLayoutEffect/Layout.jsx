import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";




export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://officeapi.akashrajpurohit.com/quote/${ counter }`);


    //console.log( data );

    const { character, quote } = !!data && data;


    //en caso de que la api traiga un arreglo en vez de un objeto:
    //const { character, quote } = !!data && data[0];


  return (
    <>

    <h1>The Office Quotes</h1>
    <hr />
    {
        isLoading
            ? <LoadingQuote />
            : <Quote character={character} quote={quote}/>           
    }

    <button className="btn btn-primary" onClick={ () => increment() } disabled = { isLoading }>
        Next quote
    </button>
  
    </>
  )
}

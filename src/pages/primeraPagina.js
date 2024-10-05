/*
    LAS FUNCIONES DE ELEMENTOS REACT SIEMPRE EMPIEZAN CON MAYUSCULA

    export default para las páginas
    export normal para los componentes que conforman las páginas
*/
import { Tarjeta } from "./componentes/tarjeta.js";
import { arrayPersonas } from "../data.js"

export default function MiPrimerElemento(){

    /*
    const url = "https://rickandmortyapi.com/api/character?count=10"

    //  Usamos la función con promesa porque ese método se les enseño en clase.
    
    function fetchCharactersPromise(url) {
        console.log("Fecheando con Promesas");        //  Este console.log no es necesario, se puede borrar.
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const charactersData = data.results;  //  Aquí se recibieron los datos. Después de esto hagan lo que quieran.
                setCharacters(charactersData);
                console.log(charactersData);
            })
            .catch((error) => {                       //  Este catch puede ser que no se lo hayan pedido o explicado. Es buena práctica
                console.error(error);
            });
    }
    */

    const tarjetaLlena = <Tarjeta nombre={"Ricardo"} edad={11}/>

    const arrayDeTarjetas = arrayPersonas.map(
        elemento => <Tarjeta nombre={elemento.nombre} edad={elemento.edad}/>
    )

    return (
        <>
            {arrayDeTarjetas}
        </>
    )
}
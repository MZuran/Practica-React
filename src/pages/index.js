import { Tarjeta2 } from "./componentes/componenteRepaso.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [personajes, setPersonajes] = useState([])

  const [tarjetasPersonajes, setTarjetasPersonajes] = useState([])

  const url = "https://rickandmortyapi.com/api/character?count=10"

  function fetchCharactersPromise(url) {
    console.log("Fecheando con Promesas");        //  Este console.log no es necesario, se puede borrar.
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            //Acá debemos meter nuestro código para manejar personajes
            setPersonajes(data.results)
        })
        .catch((error) => {                       //  Este catch puede ser que no se lo hayan pedido o explicado. Es buena práctica
            console.error(error);
        });
}

useEffect(
  () => {
    fetchCharactersPromise(url)
  },
  []  // Array de dependencias
)

const tarjetaGenerica = <Tarjeta2/>

useEffect(
  () => {
    if (personajes.length > 0) {
      console.log("Mis personajes son", personajes)

      const arrayMapeado = personajes.map(
        elemento => elemento = <Tarjeta2 name={elemento.name} photo={elemento.image}/>
      )

      console.log(arrayMapeado)

      setTarjetasPersonajes(arrayMapeado)
    }
  },
  [personajes]  // Array de dependencias (detecta cambios de todos los elementos)
)


  /*
    Dentro del return puede haber 3 tipos de cosas
    1) Html Normal (se escribe así nomás)
    2) Puede haber componentes de react personalizados (se escriben como si fueran tags <Componente/>)
    3) Puede haber variables (se escriben entre llaves)

    Si tenes un array lleno de componentes y lo metes el array entre llaves, se renderiza todo
  */
  return (
    <>
      <h1>Hola</h1>    
      {tarjetasPersonajes}
    </>
  );
}

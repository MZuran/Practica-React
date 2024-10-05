import { useState, useEffect } from "react"

export default function EjercicioUseState() {
    /*
        Usestate se define usando un array de 2 elementos
        El primero, es donde se guarda la variable y el segundo
        es una función para modificar el valor de la variable

        [valor de la variable, funcion para setear el valor] = useState(valor inicial)

        Los dos elementos del array pueden tener cualquier nombre 
        Se recomienda que el segundo se llame "set" seguido del nombre del primero
    */
    const [varNumber, setNumber] = useState(0)

    const styleMargin = {
        margin: "1vh"
    }

    function sumarUno() {
        setNumber(varNumber + 1)
    }

    function restarUno() {
        setNumber(varNumber - 1)
    }

    return (
    <>
        <h1 style={styleMargin}>Este es nuestro contador</h1>
        <h2 style={styleMargin}>{varNumber}</h2>
        <button style={styleMargin} onClick={sumarUno}>Sumar Uno</button>
        <button style={styleMargin} onClick={restarUno}>Restar Uno</button>
    </>
    )
}
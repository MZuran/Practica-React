import { useEffect, useState } from "react"

export default function EjercicioUseEffect() {
    const [estado, setEstado] = useState("Apagado")

    useEffect(
        () => {
            if (estado == "Encendido") {
                alert("Me encendiste")
            }
        },
        [estado]   // Array de dependencias
    )

    function cambiar() {
        if (estado == "Apagado") {
            setEstado("Encendido")
        } else {
            setEstado("Apagado")
        }
    }

    return (
        <>
            <button onClick={cambiar}>{estado}</button>
        </>
    )
}
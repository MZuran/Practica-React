/*
    1. Pueden o no recibir parámetros. (Los parámetros de los componentes se les dicen props)
    2. Siempre deben retornar por lo menos una tag html vacía entre parentesis (<></>)
    3. EMPIEZAN CON MAYUSCULA
    4. Siempre se deben exportar (si es una pagina entonces con export default)
    5. Los archivos.js de las páginas SÓLO PUEDEN EXPORTAR UNA PÁGINA
*/

/*
    Tarjeta puede ser
    Tarjeta(props) o
    Tarjeta({nombre, edad, foto, etc})
*/
export function Tarjeta({nombre, edad}) {

    //acá va el codigo
    const estiloTarjeta = {
        backgroundColor: "gray",
        width: "200px",
        height: "200px",
        margin: "2vw",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <>
            <div style={estiloTarjeta} className={"clase_de_css"}>
                <p>{nombre} <br/>
                {edad}</p>
            </div>
        </>
    )
}
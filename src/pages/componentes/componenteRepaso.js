export function Tarjeta2({name, photo}) {

    const estilo = {
        backgroundColor: "blue",
        width: "250px",
        height: "200px",
        borderRadius: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "15px"
    }
    return(<>
        <div style={estilo}>
            <p style={{margin: "30px"}}> {name} </p>
            <img src={photo} width="100" height="100"/>
        </div>
    </>)
}
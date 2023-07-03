const HolaMundo = (props)=>{ // ASi {nombre, apellido} o (props)
    return(
        <>
            <h1>Hola Mundo desde el componente</h1>
            <h3>{props.nombre}</h3>
            <h4>{props.apellido}</h4>
        </>
    )
}
export default HolaMundo
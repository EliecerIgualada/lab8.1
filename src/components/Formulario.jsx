const Formulario = (props)=>{ //funcion 
    return(
        <form>
            <div>
                <label htmlFor="exampleInputText1" className="form-label">Usuario</label>
                <input type="text" className="form-control" id="exampleInputText1" aria-describedby="textHelp"/>
                <div id="textHelp" className="form-text">We'll never share your texts with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp"/>
                <div id="passwordHelp" className="form-text">We'll never share your password with anyone else.</div>
            </div>
            <button type="button" className="btn btn-info">Button</button>
            
        </form>
    )
}
export default Formulario
function Recovery (){
    return (
        
        <div className="container text-center">
            <img className="mt-4" src="/img/logo.png" alt=""/>
        <h4 className="mt-60 mb-30">Recuperar Senha</h4>
        <form>
           
            <div className="mb-3">
                <input type="password" placeholder="Email" className="form-control btn btn-primary" id="formPassword"/>
            </div>
            <button type="submit" className="btn btn-primary mt-5 mb-4">Enviar</button>
        </form>
    <p>Ao se cadastrar, você concorda com os Termos de Serviço e a Política de Privacidade. </p>
    </div>
    )
}

export default Recovery;
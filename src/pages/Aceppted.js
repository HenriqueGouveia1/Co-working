function Aceppted() {
    return (

        <div className="container text-center">
            <img className="mt-120" src="/img/logo.png" alt="" />
            <h4 className="mt-60 mb-30">Recuperar Senha</h4>
            <form>

                <div className="mb-3">
                    <input type="password" placeholder="Email" className="form-control btn btn-primary" id="formPassword" />
                </div>
            </form>
            <p className="mt-120 mb-3">Senha enviada com sucesso! Sua senha foi enviada para seu e-mail. </p>
            <button type="submit" className="btn btn-primary mt-30 mb-4">Fazer login</button>
        </div>
    )
}

export default Aceppted;
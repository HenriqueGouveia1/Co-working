function Login() {
  return (
    <div className="container text-center">
        <img className="mt-4" src="/img/logo.png" alt=""/>
        <h1 className="mt-5 mb-60">Fazer login</h1>
        <form>
            <div className="mb-3">
                <input type="email" placeholder="Email" className="form-control btn btn-primary" id="formEmail"/>
            </div>
            <div className="mb-3">
                <input type="password" placeholder="Senha" className="form-control btn btn-primary" id="formPass"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="lsenha"/>
                <label className="form-check-label" for="lsenha">Lembrar Senha</label>
            </div>
            <button id="button2" type="submit"  className="btn btn-primary">Entrar</button>
        </form>
        <h1 className="mt-5 mb-3">Ou</h1>
        <div className="d-grid gap-2">
            <button id="button1" href="" className="btn btn-primary ml-30 mr-30" type="button"><img className="mr-30" src="img/icongoogle.png" alt="googleicon" /> Continuar com o google</button>
            <a href="Register"className="ml-30 mr-30"><button id="button1"  className="btn btn-primary" type="button">Novo usuario? Crie uma conta</button></a>
        </div>
        <p className="mt-3 mb-3"> <a href="Recovery">Esqueceu sua senha? Clique aqui.</a></p>
       
    </div>
  );
}

export default Login;

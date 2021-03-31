function Register() {
  return (
    <div className="container text-center">
        <h4 className="mt-60 mb-30">Criar uma conta</h4>
        <form>
            <div className="mb-3">
                <input type="text" placeholder="Nome Completo" className="form-control btn btn-primary" id="formUsername"/>
            </div>
            <div className="mb-3">
                <input type="email" placeholder="Email" className="form-control btn btn-primary" id="formEmail"/>
            </div>
            <div className="mb-3">
                <input type="text" placeholder="Você é" className="form-control btn btn-primary" id="formYoure"/>
            </div>
            <div className="mb-3">
                <input type="password" placeholder="Senha" className="form-control btn btn-primary" id="formPassword"/>
            </div>
            <div className="mb-3">
                <input type="password" placeholder="Confirma Senha" className="form-control btn btn-primary" id="formRePassword"/>
                <br></br>
                <br></br>
                <br></br>
                <h4 className="mt-60 mb-30" class="data">Data de Nascimento</h4>
                <div className="mb-3">
                <input type="text" placeholder="JAN" className="form-control btn btn-primary" id="formUsername"/>
            </div>
            <div className="mb-3">
                <input type="number" placeholder="01" className="form-control btn btn-primary" id="formUsername"/>
            </div>
            <div className="mb-3">
                <input type="number" placeholder="2000" className="form-control btn btn-primary" id="formUsername"/>
            </div>
            </div>
            <button type="submit" className="btn btn-primary mt-5 mb-4">Criar Conta</button>
        </form>
    <p>Ao se cadastrar, você concorda com os Termos de Serviço e a Política de Privacidade. </p>
    </div>
  );
}

export default Register;

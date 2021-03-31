function Changedata() {
    return (
      <div className="container text-center">
<h5 className="mt-60 mb-30">Configurações</h5>
<h3 className="mt-30 mb-30" classe="h4">Alterar Dados</h3>
        <form>
            <div className="mb-3">
                <input type="text" placeholder="Nome Completo" className="form-control btn btn-primary" id="formUsername"/>
            </div>
            <div className="mb-3">
                <input type="email" placeholder="Endereço de email" className="form-control btn btn-primary" id="formEmail"/>
            </div>
            <div className="mb-3">
                <input type="text" placeholder="Você é" className="form-control btn btn-primary" id="formYoure"/>
            </div>
            <div className="mb-3">
                <input type="password" placeholder="Senha Atual" className="form-control btn btn-primary" id="formPass"/>
            </div>
                <h3 className="mt-30 mb-30">Alterar Dados</h3>
                <div className="mb-3">
                <input type="password" placeholder="Senha Atual" className="form-control btn btn-primary" id="formUsername"/>
                </div>
            <div className="mb-3">
                <input type="password" placeholder="Nova Senha" className="form-control btn btn-primary" id="formUsername"/>
            </div>
            <div className="mb-3">
                <input type="password" placeholder="Confirmar Nova Senha" className="form-control btn btn-primary" id="formUsername"/>
            </div>
            <button type="submit" className="btn btn-primary mt-5 mb-4">Alterar</button>
        </form>
    </div>
    );
  }
  
  export default Changedata;
  
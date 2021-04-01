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
                <select className="form-control btn btn-primary form-select" id="formYoure" >
                <option hidden >Você é...</option>
                <option value="Estudante">Estudante</option>
                <option value="Interpreté">Interpreté</option>
                <option value="Professor">Professor</option>
                <option value="Outros">Outros</option>
                </select>
                
            </div>
            <div className="mb-3">
                <input type="password" placeholder="Senha" className="form-control btn btn-primary" id="formPassword"/>
            </div>
            <div className="mb-3">
                <input type="password" placeholder="Confirma Senha" className="form-control btn btn-primary mb-30" id="formRePassword"/>
                </div>     
                
                <div className="ml-60 mr-60 mb-30">
                <h4  class="data">Data de Nascimento</h4>
                </div>
            
            <div class="grid-container">
                <div id= "item1" class="grid-item" className="ml-30 mr-30 mb-3">
                    <input type="text" placeholder="JAN" className=" form-control btn btn-primary" id="formUsername"/>
                </div>
                <div id= "item2" class="grid-item" className="mr-30 mb-3">
                    <input type="number" placeholder="01" className="form-control btn btn-primary" id="formUsername"/>
                </div>
                <div id= "item3" class="grid-item" className="mr-30 mb-3">
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

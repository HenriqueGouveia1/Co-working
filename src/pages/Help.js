import NavFooter from "../componets/NavFooter";

function Help() {
  return (

    <div>
      <div className="Search">
        <nav className="navbar navbar-light bg-light">
          <img className="ml-30" id="questionMark" src="img/pergunta 4.png" alt="interroga" />
          <div className="ml-30"> <h1>Ajuda</h1> </div>
          <img id="logo" src="img/logo.png" alt="logo" />
        </nav>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item1">
          <img src="img/Group_301.svg" alt=""/>
          Fale Conosco</li>
        <li className="list-group-item2">
        <img src="img/Group_64.svg" alt=""/>
          Termos de Serviço e Políticas de Privacidade</li>
        <li className="list-group-item3" href="#">
        <img src="img/information_2.svg" alt="" />
          Dados do aplicativo</li>
       
      </ul>

     <NavFooter/>
    </div>

  );
}
export default Help;
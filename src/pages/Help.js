import navFooter from "./navFooter";

function Help() {
  return (

    <div>
      <div class="Search">
        <nav class="navbar navbar-light bg-light">
          <img class="ml-30" id="questionMark" src="img/pergunta 4.png" alt="interroga" />
          <div class="ml-30"> <h1>Ajuda</h1> </div>
          <img id="logo" src="img/logo.png" alt="logo" />
        </nav>
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item1">
          <img src="img/Group_301.svg" alt=""/>
          Fale Conosco</li>
        <li class="list-group-item2">
        <img src="img/Group_64.svg" alt=""/>
          Termos de Serviço e Políticas de Privacidade</li>
        <li class="list-group-item3" href="#">
        <img src="img/information_2.svg" alt="" />
          Dados do aplicativo</li>
       
      </ul>


      <footer>
        <div class="navbar-expand fixed-bottom">
          <nav class="navbar " >
            <a class="navbar-brand" href="1">
              <img src="img/Home.svg" width="30" height="30" class="d-inline-block align-top ml-30" alt="Home" />
            </a>
            <a class="navbar-brand" href="2">
              <img src="img/FAVORITO.svg" width="30" height="30" class="d-inline-block align-top" alt="Fav" />
            </a>
            <a class="navbar-brand" href="3">
              <img src="img/LIBRAS.svg" width="30" height="30" class="d-inline-block align-top" alt="Libras" />
            </a>
            <a class="navbar-brand" href="4">
              <img src="img/OPCOES_1.png" width="30" height="30" class="d-inline-block align-top" alt="Opotions" />
            </a>
          </nav>
        </div>
      </footer>
    </div>

  );
}
export default Help;
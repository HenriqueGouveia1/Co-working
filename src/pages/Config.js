function Config() {
  return (
   <div>
      <div class="Search">
      <nav class="navbar navbar-light bg-light">
        <form class="form">
        
          <input  id="searchInput" class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Search"/>

        </form>
        <div id="logo"> <img src="img/logo.png" alt="logo"  /> </div>
      </nav>

    </div>

      <div>
        <nav class="navbar navbar-light bg-light" >
          <a class="navbar-brand" href="#">
            <img src="img/Home.svg" width="30" height="30" class="d-inline-block align-top ml-30"  alt="Home"/>
          </a>
          <a class="navbar-brand" href="#">
            <img src="img/FAVORITO.svg" width="30" height="30" class="d-inline-block align-top" alt="Fav"/>
          </a>
          <a class="navbar-brand" href="#">
            <img src="img/LIBRAS.svg" width="30" height="30" class="d-inline-block align-top" alt="Libras"/>
          </a>
          <a class="navbar-brand" href="#">
            <img src="img/OPCOES_1.png" width="30" height="30" class="d-inline-block align-top" alt="Opotions"/>
          </a>
       </nav>
      </div>

    </div>   

  );
}
export default Config;
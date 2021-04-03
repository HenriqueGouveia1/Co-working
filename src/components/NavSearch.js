function NavSearchBar(){
    return(
        <div className="Search">
        <nav id="navSearch" className="navbar fixed-top bg-light">
          <i className=""></i>

          <form className="form">

            <input id="searchInput" className="form-control " type="search" placeholder="Pesquisar" aria-label="Search" />

          </form>
          <div id="logo"> <img src="img/logo.png" alt="logo" /> </div>
        </nav>
      </div>
    );
}export default NavSearchBar;
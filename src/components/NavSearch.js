function NavSearchBar(){
    return(
        <div className="Search "> 
        <nav id="navSearch" className="py-2 fixed-top bg-light ">
          <div className="container d-flex justify-content-between">


            <form className="form me-2">

              <input id="searchInput" className="form-control " type="search" placeholder="Pesquisar" aria-label="Search" />

            </form>
            <div id="logo"> <img className="responsive-img-logo" src="img/logo.png" alt="logo" /> </div>
          </div>

        </nav>
      </div>
    );
}export default NavSearchBar;
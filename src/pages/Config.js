import NavFooter from "../componets/NavFooter";

function Config() {
  return (
    <div >
      <div className="Search ">
        <nav className="navbar navbar-light bg-light ">
          <i className="bi bi-search"></i>

          <form className="form">

            <input id="searchInput" className="form-control mr-sm-2 " type="search" placeholder="Pesquisar" aria-label="Search" />

          </form>
          <div id="logo"> <img src="img/logo.png" alt="logo" /> </div>
        </nav>

      </div>
      <NavFooter/>
    </div>

  );
}
export default Config;
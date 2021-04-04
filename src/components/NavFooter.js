function NavFooter() {
  return (
    <footer>
      <div className="navbar-expand fixed-bottom">
        <nav className="navbar" >
          <a className="navbar-brand" href="subjectscreen">
            <img src="img/Home.svg" width="30" height="30" className="d-inline-block align-top ml-30" alt="Home" />
          </a>
          <a className="navbar-brand" href="SubjectScreenfav">
            <img src="img/FAVORITO.svg" width="30" height="30" className="d-inline-block align-top" alt="Fav" />
          </a>
          <a className="navbar-brand" href="ResourcesInLibras">
            <img src="img/LIBRAS.svg" width="30" height="30" className="d-inline-block align-top" alt="Libras" />
          </a>
          <a className="navbar-brand">
            <div className="btn-group dropup">
              <button type="button"  className="btn " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="img/OPCOES_1.PNG" width="30" height="30" className="d-inline-block align-top" alt="Option" />
              </button>
            </div>
          </a>
        </nav>
      </div>
    </footer>
  );


} export default NavFooter;
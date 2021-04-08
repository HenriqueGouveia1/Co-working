import NavSearch from "../components/NavSearch";
import NavFooter from "../components/NavFooter";
function Libras() {
    return (

        <div className="">
            <NavSearch />
            
            <div className="mt-120 mb-60">
                <h1 className="wrapperTitle" >Apresentação dos Ícones</h1>
                <div className="grid-container ml-60 mt-3">
                <div className="grid-item item-2">
                <div className="container">
                  
                   <div className="mt-30 mr-30 mb-3" >
                        <img src="img/homeApresentacao.svg" alt="a"/>
                        <p>Inicio</p>
                        <br />
                        <iframe width="auto" height="auto" 
                        src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                        </div> 
                    

                    <div className="mt-30 mr-30 mb-3"  >
                        <img src="img/favApresentacao.svg" alt="a"/>
                        <p>Favoritos</p>
                        <br />
                        <iframe width="auto" height="auto" 
                        src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </div>

                        
                    <div className="mt-30 mr-30 mb-3"  >
                        <img src="img/librasApresentacao.svg" alt="a"/>
                        <p>Intens em LIBRAS</p>
                        <br />
                        <iframe width="auto" height="auto" 
                        src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </div>


                    <div className="mt-30 mr-30 mb-3"  >
                        <img src="img/menuApresentacao.svg" alt="a"/>
                        <p>Opções</p>
                        <br />
                        <iframe width="auto" height="auto" 
                        src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </div>
                    
                    <div className="mt-30 mr-30 mb-3"  >
                        <img src="img/condigApresentacao.svg" alt="a"/>
                        <p>Configurações</p>
                        <br />
                        <iframe width="auto" height="auto" 
                        src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </div>

                    <div className="mt-30 mr-30 mb-3"  >
                        <img src="img/helpApresentacao.svg" alt="a"/>
                        <p>Ajuda</p>
                        <br />
                        <iframe width="auto" height="auto" 
                        src="https://www.youtube.com/embed/_yf5vzZ2sYE?controls=0" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                    </div>

                    </div>
                    </div>
                    </div>
            </div>
            <NavFooter/>
        </div>

    );
} export default Libras;

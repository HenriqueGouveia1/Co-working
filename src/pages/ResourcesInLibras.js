import NavSearch from "../components/NavSearch";
import NavFooter from "../components/NavFooter";

function ResourcesInLibras() {
    return (

        <div className="">
            <NavSearch />
            <div className="mt-120 mb-60">
                <h1 className="wrapperTitle" >Apresentação dos Ícones</h1>
                <div className="grid-container ml-60 mt-3">
                    <div className="grid-item item1">
                        <div className="ml-60"><img className="" src="./img/apresentacaohome.svg" alt="Inicio" />
                        <p>Inicio</p>  </div>

                        <p className="videoemlibras">Video em libras</p>
                    </div>
                    <div  className="grid-item item2">
                       <div className="ml-60 mr-30">
                       <img src="./img/apresentacaofav.svg" alt="Favoritos" />
                        <p>Favoritos</p>
                       </div>
                        <p className="videoemlibras">Video em libras</p>
                    </div>
                    <div className="grid-item">
                       <div className="ml-60">
                       <img src="./img/LIBRAS.svg" alt="libras" />
                        <p>Itens em LIBRAS</p>
                       </div>
                        <p className="videoemlibras">Video em libras</p>
                    </div>
                    <div className="grid-item">
                       <div className="ml-60">
                       <img src="./img/OPCOES_1.PNG" alt="opcoes" />
                        <p>Opções</p>
                       </div>
                        <p className="videoemlibras">Video em libras</p>
                    </div>
                    <div className="grid-item">
                        <div className="ml-60">
                        <img src="./img/apresentacaoengrenagem.svg" alt="engrenagem" />
                        <p>Configurações</p>
                        </div>
                        <p className="videoemlibras">Video em libras</p>
                        
                    </div>
                    <div className="grid-item">
                       <div className=" ml-60">
                       <img src="./img/pergunta 4.png" alt="ajuda" />
                        <p>Ajuda</p>
                       
                       </div> 
                       <p className="videoemlibras">Video em libras</p>
                    </div>
                </div>
            </div>
            <NavFooter/>
        </div>

    );
} export default ResourcesInLibras;

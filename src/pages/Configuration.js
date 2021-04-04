import NavFooter from "../components/NavFooter";
import NavSeachBar from "../components/NavSearch";


function Configuration() {
    return (
        <div>
            <NavSeachBar />

            <div id="cardConfig" className="card ml-120 mt-60">

                <div className="ml-30 ">
                    <h4 ><img src="img/engrenagem.svg" alt="" />
                        <a className="mt-3 ml-30" id="optionHelp" href="Changedata">Configurações</a>
                    </h4>
                </div>
                <div className="ml-30 ">
                    <h4 id="optionHelp">
                        
                        <img src="img/pergunta 4.png" alt="" />
                        <a className="mt-3 ml-30 " id="optionHelp" href="/help">Ajuda</a>
                    </h4>
                </div>
                <div className="">
                    <h4 id="optionHelp" className="ml-30"><img src="img/X.svg" alt="" />
                        <a className="mt-3 ml-30 mb-3" id="optionHelp" href="/">Sair</a>
                    </h4>
                </div>

            </div>

            <NavFooter />
        </div>

    );
}
export default Configuration;
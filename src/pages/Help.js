import NavFooter from "../components/NavFooter";
import NavHeader from "../components/NavHeaderHelp";

function Help() {
  return (

    <div>
      <div>
        <NavHeader />
      </div>

      <div className="mt-120">
        <div className="ml-30">
          <h4 ><img src="img/Group_301.svg" alt="" />
            <a className="mt-3 ml-30 optionHelp" href="/talktous">Fale Conosco</a>
            </h4>
        </div>
        <div className="ml-30">
          <h4 className="optionHelp">
            <img src="img/Group_64.svg" alt="" />
            <a className="mt-3 ml-30 optionHelp" href="/terms">Termos de Serviço e Políticas de Privacidade</a>
              </h4>
        </div>
        <div className="">
          <h4 className="optionHelp"><img src="img/information_2.svg" alt="" />
            <a className="mt-3 ml-30 optionHelp" href="/appdata">Dados do aplicativo</a>
            </h4>
        </div>

      </div>

      <NavFooter />
    </div>

  );
}
export default Help;
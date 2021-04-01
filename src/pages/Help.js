import NavFooter from "../componets/NavFooter";
import NavHeader from "../componets/NavHeaderHelp";

function Help() {
  return (

    <div>
      <div>
      <NavHeader/>
      </div>

      <div>
      <ul className="list-group list-group-flush mt-120">
            <li className="list-group-item1">
              <img src="img/Group_301.svg" alt=""/>
              Fale Conosco</li>
            <li className="list-group-item2">
            <img src="img/Group_64.svg" alt=""/>
              Termos de Serviço e Políticas de Privacidade</li>
            <li className="list-group-item3" href="#">
            <img src="img/information_2.svg" alt="" />
              Dados do aplicativo</li>
          
          </ul>
      </div>

        <NavFooter/>
    </div>

  );
}
export default Help;
import NavFooter from "../componets/NavFooter";
import NavHeader from "../componets/NavHeaderHelp";

function TalkToUsFeedback() {
    return (
        <div>
            <NavHeader />

            <div class="form-group">
                <label id="TalkToUsTitle" className="ml-30" for="Form">Fale conosco</label>
                
                <div id="alertSendedMsg" className="alert alert-light mt-3" role="alert">
                  <p id="alertMsg" className="mt-3">
                  Mensagem enviada com sucesso!
                 Agradecemos seu feedback, em breve solucionaremos o seu problema.
                  </p>
                </div>
               
            </div>

            <NavFooter />
        </div>

    );
} export default TalkToUsFeedback;
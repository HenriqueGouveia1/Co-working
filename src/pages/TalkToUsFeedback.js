import NavFooter from "../components/NavFooter";
import NavHeader from "../components/NavHeaderHelp";

function TalkToUsFeedback() {
    return (
        <div>
            <NavHeader />

            <div className="form-group">
                <label className="ml-30 TalkToUsTitle" for="Form">Fale conosco</label>
                
                <div className="alert alert-light mt-3 alertSendedMsg" role="alert">
                  <p className="mt-3 alertMsg">
                  Mensagem enviada com sucesso!
                 Agradecemos seu feedback, em breve solucionaremos o seu problema.
                  </p>
                </div>
               
            </div>

            <NavFooter />
        </div>

    );
} export default TalkToUsFeedback;
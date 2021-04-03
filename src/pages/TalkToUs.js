import NavFooter from "../components/NavFooter";
import NavHeader from "../components/NavHeaderHelp";

function TalkToUs(){
    return(
       <div>
            <NavHeader/>
            
            <div className="form-group">
             <label id="TalkToUsTitle" className="ml-30" for="Form">Fale conosco</label>
             <textarea id="FormTalkToUs" className="form-control" rows="3" placeholder="Escreva sua mensagem"></textarea>
            </div>
            <button id="button3" type="submit" className="btn btn-primary mb-2 ml-30">Enviar</button>
            <NavFooter/>
       </div>
        
    );
}export default TalkToUs;
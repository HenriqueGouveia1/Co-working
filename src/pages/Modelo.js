import NavFooter from "../components/NavFooter";
import NavSeachBar from "../components/NavSearch"
function Modelo() {
    return (
        <div className="mt-120" >
            <NavSeachBar />
            <h1  className="wrapperTitle" >Sistema Digestório</h1>
            <div className="wrapper">

                <div className="item mt-30 mr-30 mb-3" >
                    <video className="" width="320" height="240" controls>
                        <source src="" type="video/mp4" />
                          
                    </video>

                </div>
            </div>
            <img className="ml-30 mb-3" src="./img/staryellow.png" alt="Favoritos" />

            <div>
                <p className="paragrafo ml-30 mr-30">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptates asperiores veniam alias velit quas maiores eum veritatis natus nihil molestias modi sunt accusantium commodi rerum, dignissimos beatae facere sint?</p>
            </div>

            <NavFooter />
        </div>
    );
} export default Modelo;
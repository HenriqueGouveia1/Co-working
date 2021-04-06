import NavFooter from "../components/NavFooter";
import NavSeach from "../components/NavSearch"
import Subject from "../components/Subject";


function Home() {
  return (
    <div  >
      <NavSeach /> 

        <div className="mt-120">
          <Subject />
        </div>


      <NavFooter />
    </div>

  );
}
export default Home;
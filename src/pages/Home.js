import NavFooter from "../components/NavFooter";
import NavSeachBar from "../components/NavSearch"
import SubjectWrapper from "../components/SubjectWrapper";


function Home() {
  return (
    <div  >
      <NavSeachBar /> 

        <div className="mt-120">
          <SubjectWrapper />
        </div>


      <NavFooter />
    </div>

  );
}
export default Home;
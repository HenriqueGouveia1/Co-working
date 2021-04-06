import NavFooter from "../components/NavFooter";
import NavSeachBar from "../components/NavSearch"
import SubjectWrapperfav from "../components/Subjectfav";


function Favoritos() {
  return (
    <div >
      <NavSeachBar />

      <body>
        <div className="mt-120">
          <SubjectWrapperfav />
        </div>
      </body>

      <NavFooter />
    </div>

  );
}
export default Favoritos;
import NavFooter from "../components/NavFooter";
import NavSeachBar from "../components/NavSearch"
import SubjectWrapperfav from "../components/SubjectWrapperfav";


function SubjectScreenfav() {
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
export default SubjectScreenfav;
import NavFooter from "../components/NavFooter";
import NavSeachBar from "../components/NavSearch"
import SubjectWrapper from "../components/SubjectWrapper";


function SubjectScreen() {
  return (
    <div >
      <NavSeachBar />

      <body>
        <div className="mt-120">
          <SubjectWrapper />
        </div>
      </body>


      <NavFooter />
    </div>

  );
}
export default SubjectScreen;
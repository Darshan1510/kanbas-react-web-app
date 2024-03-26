import CourseStatus from "../Modules/CourseStatus";
import ModuleList from "../Modules/ModuleList";
import Toolbar from "../Modules/Toolbar";

function Home() {
  return (
    <div className="d-flex">
      <div className="col-9">
        <Toolbar />
        <hr/>
        <ModuleList />
      </div>
      <CourseStatus />
    </div>
  );
}
export default Home;

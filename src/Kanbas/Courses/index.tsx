import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaChevronCircleDown } from "react-icons/fa";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Grades from "./Grades";
import AssignmentEditor from "./Assignments/Editor";
import BreadCrumb from "./components/BreadCrumb";
import { Link } from "react-router-dom";

function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="row">
      <BreadCrumb />
      <div className="d-block d-md-none wd-course-navigation-sm-size">
        <div className="row">
          <div className="col-2">
            <Link to="#">
              <HiMiniBars3 size={32} />
            </Link>
          </div>
          <div className="col-8">{course?.name}</div>
          <div className="col-2">
            <Link to="#">
              <FaChevronCircleDown size={32} />
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-3 mx-4" />
      <div className="d-flex">
        <div className="col-2">
          <CourseNavigation />
        </div>
        <div className="col-10">
          <div className="bottom-0 end-0" style={{ left: "250px", top: "80px" }}>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="ZoomMeetings" element={<h1>ZoomMeetings</h1>} />
              <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
              <Route path="Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="Grades" element={<Grades />} />
              <Route path="People" element={<h1>People</h1>} />
              <Route path="PanoptoVideo" element={<h1>Panopto Video</h1>} />
              <Route path="Discussions" element={<h1>Discussions</h1>} />
              <Route path="Announcements" element={<h1>Announcements</h1>} />
              <Route path="Pages" element={<h1>Pages</h1>} />
              <Route path="Files" element={<h1>Files</h1>} />
              <Route path="Rubrics" element={<h1>Rubrics</h1>} />
              <Route path="Outcomes" element={<h1>Outcomes</h1>} />
              <Route path="Collaborations" element={<h1>Collaborations</h1>} />
              <Route path="Syllabus" element={<h1>Syllabus</h1>} />
              <Route path="Settings" element={<h1>Settings</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

import { FaBars, FaChevronRight } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import db from "../../../../Kanbas/Database";

function BreadCrumb() {
  const { courseId } = useParams();
  //const history = useHistory();
  const course = db.courses.find((course) => course._id === courseId);

  let arr = window.location.hash.split("/");

  return (
    <div className="row fs-4 mt-2 ps-0 pb-0 d-none d-md-block">
      <nav style={{ paddingLeft: "25px" }} aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="me-4 mx-4">
            <a href="#">
              <HiMiniBars3 style={{ color: "#000000" }} className="text-danger" />
            </a>
          </li>
          <li className="breadcrumb-item me-2 ">
            <Link
              to={`/Kanbas/Courses/${courseId}/Home`}
              className="text-decoration-none text-danger"
            >
              <span className="text-center" style={{ fontSize: "18px" }}>
                {" "}
                {course?.name}
              </span>
            </Link>
          </li>
          <li className="me-2">
            <FaChevronRight style={{ color: "#000000" }} size={16} />
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <small style={{ fontSize: "18px" }}>{arr[arr.length - 1]}</small>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;

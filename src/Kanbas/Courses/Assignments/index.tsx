import { FaCheckCircle, FaEdit, FaEllipsisV, FaGripVertical, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter((assignment) => assignment.course === courseId);
  return (
    <div>
      <div className="d-flex">
        <input className="form-control order-0 w-25" placeholder="Search for Assignment" />
        <div className="ms-auto">
          <button className="btn mx-2 btn-light">
            <i className="fa fa-plus-square-o"></i>&nbsp;Group
          </button>
          <button className="btn btn-danger mx-2">
            <i className="fa fa-plus-square-o"></i>&nbsp;Assignment
          </button>
          <button className="btn">
            <i className="fa fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
      <hr className="" />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <small className="border border-dark rounded-pill p-1 mx-3"> 40% of Total </small>
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item" key={assignment._id}>
                <FaEllipsisV
                  className="float-end fs-5"
                  style={{ color: "#050505", marginTop: "2%" }}
                />
                <FaCheckCircle
                  className="float-end me-3 fs-5 text-success"
                  style={{ marginTop: "2%" }}
                />
                <FaGripVertical
                  className="float-start me-3 fs-5"
                  style={{ color: "black", marginTop: "2%" }}
                />
                <FaEdit
                  className="float-start me-3 fs-5 text-success"
                  style={{ color: "black", marginTop: "2%" }}
                />

                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "18px",
                  }}
                  className="fs-5"
                >
                  {assignment.title}
                </Link>
                <p style={{marginLeft:"5%"}}>
                  Week {assignment.week} <br />
                  Due {assignment.dueDate} | {assignment.points} pts
                </p>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Assignments;

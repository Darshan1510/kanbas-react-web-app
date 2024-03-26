import { FaCheckCircle, FaEdit, FaEllipsisV, FaGripVertical, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();

  const handleDelete = (assignmentId: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this assignment?");
    if (isConfirmed) {
      dispatch(deleteAssignment(assignmentId));
    }
  };
  return (
    <div>
      <div className="d-flex">
        <input className="form-control order-0 w-25" placeholder="Search for Assignment" />
        <div className="ms-auto">
          <button className="btn mx-2 btn-light">
            <i className="fa fa-plus-square-o"></i>&nbsp;Group
          </button>
          <button className="btn btn-danger mx-2">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/Kanbas/Courses/${courseId}/Assignments/add`}
            >
              <i className="fa fa-plus-square-o"></i>&nbsp;Assignment
            </Link>
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
                <button
                  className="btn btn-danger float-end me-3 fs-6 mx-2 p-1"
                  onClick={() => handleDelete(assignment._id)}
                  style={{ marginTop: "1%" }}
                >
                  Delete
                </button>
                <FaGripVertical
                  className="float-start me-3 fs-5"
                  style={{ color: "black", marginTop: "2%" }}
                />

                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  onClick={() => dispatch(setAssignment(assignment))}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bolder",
                    fontSize: "18px",
                  }}
                  className="fs-5"
                >
                  <FaEdit
                    className="float-start me-3 fs-5 text-success"
                    style={{ color: "black", marginTop: "2%" }}
                  />

                  {assignment.title}
                </Link>
                <p style={{ marginLeft: "5%" }}>
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

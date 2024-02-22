import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter((assignment) => assignment.course === courseId);
  return (
    <div>
      <hr className="" />
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
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
export default Assignments;

import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

function Grades() {
  const { courseId } = useParams();
  const as = db.assignments.filter((assignment) => assignment.course === courseId);
  const es = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="d-flex justify-content-end">
        <select
          className="form-select d-inline float-end me-2"
          style={{ width: "25%" }}
          aria-label="Gradebook"
        >
          <option value="Gradebook" selected>
            Gradebook
          </option>
        </select>
        <button className="btn mx-2" style={{ backgroundColor: "lightgrey" }}>
          <i className="fa fa-upload mx-1"></i>Import
        </button>
        <button className="btn mx-2" style={{ backgroundColor: "lightgrey" }}>
          <i className="fa fa-download mx-1"></i>Export
        </button>
        <button className="btn mx-2" style={{ backgroundColor: "lightgrey" }}>
          <i className="fa fa-gear"></i>
        </button>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <b>Student Names</b>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-search"></i>{" "}
            </span>
            <input placeholder="Search Students" type="text" className="form-control" />
            <span className="input-group-text">
              <i className="fa fa-caret-down"></i>
            </span>
          </div>
        </div>

        <div className="col-md-6">
          <b>Assignment Names</b>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-search"></i>{" "}
            </span>
            <input placeholder="Search Assignments" type="text" className="form-control" />
            <span className="input-group-text">
              <i className="fa fa-caret-down"></i>
            </span>
          </div>
        </div>
      </div>
      <div>
        <button className="btn p-1 mt-2" style={{ backgroundColor: "lightgrey" }}>
          <i className="fa fa-filter"></i>Apply Filters
        </button>
      </div>
      <br />
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {as.map((assignment) => (
                <th>
                  {assignment.title}
                  <br />
                  Out of {assignment.points}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {es.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr key={user?._id}>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {as.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    return (
                      <td>
                        {grade?.grade || (
                          <div className="d-flex">
                            <input className="form-control" value="100" />
                            &nbsp;
                            <FaArrowCircleRight className="text-center" />
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;

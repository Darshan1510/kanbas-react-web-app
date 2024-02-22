import { Link } from "react-router-dom";
import { courses } from "../Database";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300, minWidth: 300 }}>
              <div className="card">
                <img src={`${course.image}`} style={{ height: "150px" }} />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}
                  >
                    {course.name}{" "}
                  </Link>
                  <p className="card-text">{course.name}</p>

                  <div className="d-flex mb-3">
                    <i className="fa fa-bullhorn fa-1x text-secondary"></i>
                    <i className="fa fa-file-text-o fa-1x text-secondary mx-4"></i>
                    <i className="fa fa-folder fa-1x text-secondary mx-2"></i>
                  </div>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Go{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

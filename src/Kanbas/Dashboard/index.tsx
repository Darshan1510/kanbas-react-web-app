import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <div>
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <input
          value={course.image}
          className="form-control"
          onChange={(e) => setCourse({ ...course, image: e.target.value })}
        />
        <br />
        <div className="d-flex">
          <button className="btn btn-success btn-sm" onClick={addNewCourse}>
            <FaPlus />
            &nbsp; Add
          </button>
          <button className="btn btn-primary btn-sm mx-1" onClick={updateCourse}>
            <FaEdit />
            &nbsp; Update
          </button>
        </div>
      </div>
      <hr />
      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300, minWidth: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} style={{ height: "150px" }} />
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
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    className="btn btn-primary btn-sm mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
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

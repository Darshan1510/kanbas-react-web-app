import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { KanbasState } from "../../../store";
import { addAssignment, setAssignment, updateAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [isNewAssignment, setIsNewAssignment] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsNewAssignment(location.pathname.endsWith("/add"));
  }, [location.pathname]);

  const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (isNewAssignment) {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="container">
      <div>
        <div className="row">
          <div className="col">
            <button className="btn btn-light border float-end">
              <i className="fa fa-ellipsis-v"></i>
            </button>
            <button className="btn btn-success float-end mx-2" disabled>
              <i className="fa fa-check-circle"></i> Published
            </button>
          </div>
        </div>

        <hr />

        <form action="#">
          <div className="row mt-3">
            <label className="ps-0" htmlFor="assignment_name">
              <h3> Assignment Name</h3>
            </label>
            <input
              type="text"
              name="assignment_name"
              id="assignment_name"
              className="form-control w-50"
              value={assignment?.title}
              onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
            />
          </div>
          <div className="row mt-5">
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
              className="form-control w-50"
              value={assignment?.description}
              onChange={(e) =>
                dispatch(setAssignment({ ...assignment, description: e.target.value }))
              }
            >
              Assignment Description
            </textarea>
          </div>
          <div className="row mt-5">
            <div className="col-2">
              <label className="form-label float-end" htmlFor="points">
                Points
              </label>
            </div>
            <div className="col-4">
              <input
                type="number"
                id="points"
                min="0"
                max="100"
                value="100"
                className="form-control"
                onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))}
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-2">
              <label className="form-label float-end" htmlFor="assignment-group">
                Assignment Group
              </label>
            </div>
            <div className="col-4">
              <select
                id="assignment-group"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="ASSIGNMENTS" selected />
                ASSIGNMENTS
              </select>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-2">
              <label className="form-label float-end" htmlFor="grade-display">
                Display Grade as
              </label>
            </div>
            <div className="col-4">
              <select
                id="grade-display"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="Percentage" selected />
                Percentage
              </select>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-2">
              <label className="form-label float-end" htmlFor="submission-type">
                Submission Type
              </label>
            </div>
            <div className="col-4">
              <select
                id="submission-type"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="submission-type" selected /> Online
              </select>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-2">
              <label className="form-label float-end">Online Entry Options</label>
            </div>
            <div className="col-4">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" /> Text Entry
              </label>
              <br />
              <label className="mt-3 form-check-label">
                <input className="form-check-input" type="checkbox" /> Website URL
              </label>
              <br />
              <label className="mt-3 form-check-label">
                <input className="form-check-input" type="checkbox" /> Media Recordings
              </label>
              <br />
              <label className="mt-3 form-check-label">
                <input className="form-check-input" type="checkbox" /> Student Annotation
              </label>
              <br />
              <label className="mt-3 mb-3 form-check-label">
                <input className="form-check-input" type="checkbox" /> File Uploads
              </label>

              <br />
              <label htmlFor="count-final-grade" className="form-check-label">
                <input type="checkbox" className="form-check-input" id="count-final-grade" />
                &nbsp;Do not count this assignment towards the final grade
              </label>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-2">
              <label className="form-label float-end" htmlFor="Assign">
                Assign
              </label>
            </div>
            <div className="col-10">
              <div className="row border border-1" style={{ width: "45%" }}>
                <div className="col-12">
                  <label className="form-label mt-3">
                    <h4>Assign to</h4>
                    <input className="form-control" id="Assign" type="text" value="Everyone" />
                  </label>
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="Due">
                    {" "}
                    Due
                  </label>
                  <input
                    className="form-control"
                    id="Due"
                    type="date"
                    value="2021-01-01"
                    onChange={(e) =>
                      dispatch(setAssignment({ ...assignment, due_date: e.target.value }))
                    }
                  />
                </div>

                <div className="col-6 pe-0 mt-3">
                  <label className="form-label" htmlFor="available-from">
                    Available from
                  </label>
                  <input
                    className="form-control"
                    id="available-from"
                    type="date"
                    value="2021-01-01"
                    onChange={(e) =>
                      dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))
                    }
                  />
                </div>

                <div className="col-6 ps-1 mt-3">
                  <label className="form-label" htmlFor="until">
                    {" "}
                    Until
                  </label>
                  <input
                    className="form-control"
                    id="until"
                    type="date"
                    value="2021-01-01"
                    onChange={(e) =>
                      dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))
                    }
                  />
                </div>

                <div className="col-12 pe-0 ps-0 mt-4">
                  <button className="btn btn-secondary w-100">
                    <FaPlus className="mx-1" size={16} />
                    <span className="text-center">Add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row mt-2">
            <div className="col-12">
              <label className="form-check-label">
                <input type="checkbox" name="notify" className="form-check-input" />
                &nbsp;Notify users that this content has changed
              </label>
              <span className="float-end">
                <button className="btn btn-light " type="submit">
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </Link>
                </button>
                <button onClick={handleSave} className="btn btn-danger " type="submit">
                  Save
                </button>
              </span>
            </div>
          </div>

          <hr />
        </form>
      </div>
    </div>
  );
}
export default AssignmentEditor;

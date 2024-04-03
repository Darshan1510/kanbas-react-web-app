import axios from "axios";
import React, { useEffect, useState } from "react";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 1,
    name: "Backend Development",
    description: "This is a Node JS module",
    course: "Web Development",
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const MODULE_URL = "http://localhost:4000/a5/module";

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  
  useEffect(() => {
    fetchAssignment();
  }, []);


  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment" className="btn btn-primary btn-sm">
        Get Assignment
      </a>
      <br />
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title" className="btn btn-danger btn-sm">
        Get Title
      </a>
      <br />
      <h4>Modifying Properties</h4>
      <input
        type="text"
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        value={assignment.title}
        className="form-control"
      />
      <br />
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`} className="btn btn-warning btn-sm">
        Update Title
      </a>
      <br />
      <br />
      <div>
        <input
          type="number"
          onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
          value={assignment.score}
          className="form-control"
        />
        <br />
        <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`} className="btn btn-primary btn-sm">
          Update Score
        </a>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
          value=""
          checked={assignment.completed}
        />
        &nbsp;
        <label className="">Is assignment completed?</label>
        <br />
        <a
          href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
          className="btn btn-primary btn-sm"
        >
          Update completed flag
        </a>
      </div>
      <br />
      <div>
        <h4>Playing with Module</h4>
        <a href={`${MODULE_URL}`} className="btn btn-primary btn-sm">
          Get Module
        </a>
        <a href={`${MODULE_URL}/name`} className="btn btn-danger btn-sm mx-2">
          Get Module Name
        </a>
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setModule({ ...module, name: e.target.value })}
          value={module.name}
          className="form-control"
        />
        <br />
        <a href={`${MODULE_URL}/name/${module.name}`} className="btn btn-danger btn-sm">
          Update Module Name
        </a>
        <br />
        <br />
        <textarea
          onChange={(e) => setModule({ ...module, description: e.target.value })}
          value={module.description}
          className="form-control"
        />
        <br />
        <a
          href={`${MODULE_URL}/description/${module.description}`}
          className="btn btn-primary btn-sm"
        >
          Update Module Description
        </a>
        <br />
      </div>
    </div>
  );
}
export default WorkingWithObjects;

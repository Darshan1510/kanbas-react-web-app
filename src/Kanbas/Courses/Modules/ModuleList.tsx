import { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <ul className="list-group wd-modules">
      <li className="list-group-item">
        <input
          value={module.name}
          className="form-control w-75 my-1 mx-2"
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />

        <textarea
          className="form-control my-1 mx-2 w-75"
          value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        <button
          className="btn btn-success mx-1 my-1 btn-sm m-1 p-1"
          style={{ borderRadius: "10%" }}
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
        <button
          className="btn btn-primary mx-1 my-1 btn-sm m-1 p-1"
          style={{ borderRadius: "10%" }}
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
      </li>
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module) => (
          <li
            key={module._id}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm mx-2 m-1"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
                <FaCheckCircle className="text-success mx-2" />
                <FaPlusCircle className="mx-2" />
                <FaEllipsisV className="mx-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: any) => (
                  <li key={lesson._id} className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="mx-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;

import { useEffect, useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { KanbasState } from "../../store";
import * as client from "./client";
import "./index.css";
import { addModule, deleteModule, setModule, setModules, updateModule } from "./reducer";


function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const [selectedModule, setSelectedModule] = useState<any>(moduleList[0]);

  useEffect(() => {
    client.findModulesForCourse(courseId).then((modules) => {
      dispatch(setModules(modules));
    });
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

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
          onClick={handleAddModule}
        >
          Add
        </button>
        <button
          className="btn btn-primary mx-1 my-1 btn-sm m-1 p-1"
          style={{ borderRadius: "10%" }}
          onClick={handleUpdateModule}
        >
          Update
        </button>
      </li>
      {moduleList.map((module) => (
        <li key={module._id} className="list-group-item" onClick={() => setSelectedModule(module)}>
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
                onClick={() => handleDeleteModule(module._id)}
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

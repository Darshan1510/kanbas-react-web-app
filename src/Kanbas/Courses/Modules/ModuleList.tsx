import { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <ul className="list-group wd-modules">
      {modulesList.map((module) => (
        <li key={module._id} className="list-group-item" onClick={() => setSelectedModule(module)}>
          <div>
            <FaEllipsisV className="me-2" />
            {module.name}
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="mx-2" />
              <FaEllipsisV className="mx-2" />
            </span>
          </div>
          {selectedModule._id === module._id && (
            <ul className="list-group">
              {module.lessons?.map((lesson) => (
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

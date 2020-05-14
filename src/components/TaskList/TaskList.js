import React, { useContext } from "react";
import "./TaskList.css";
import { Context } from "../../context";

export const TaskList = ({ tasks }) => {
  const { toggleTask, removeTask } = useContext(Context);

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li className="task-item" key={task.id}>
          <div className="custom-control">
            <input
              type="checkbox"
              id={task.id}
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <label className="custom-control-label" htmlFor={task.id}>
              <span className="custom-checkbox"></span>
              {task.name}
              <small className="task-item__date">
                {new Date().toLocaleDateString()}
              </small>
            </label>
          </div>
          <button
            className="btn btn-task-delete"
            type="button"
            aria-label="Close"
            onClick={() => removeTask(task.id)}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};

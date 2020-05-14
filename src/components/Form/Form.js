import React, { useState } from "react";
import "./Form.css";

export const Form = ({ onCreate }) => {
  const [value, setValue] = useState("");

  function submitHandler(evt) {
    evt.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          className="new-task"
          type="text"
          placeholder="New task name"
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />
        <button className="btn btn-task-create" aria-label="Create new task">
          +
        </button>
      </div>
    </form>
  );
};

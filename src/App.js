import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { TaskList } from "./components/TaskList/TaskList";
import { Context } from "./context";

function App() {
  const [tasks, setTasks] = useState([
    { name: "Изучить React", id: 1, completed: true },
    { name: "Прыгнуть с парашютом", id: 3, completed: false },
    { name: "Первым ступить на Марс", id: 2, completed: false },
  ]);

  useEffect(() => {
    const raw = localStorage.getItem("tasks") || JSON.stringify([]);
    setTasks(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function addTask(name) {
    setTasks(tasks.concat([{ name, id: Date.now(), completed: false }]));
  }

  return (
    <Context.Provider value={{ toggleTask, removeTask }}>
      <Header />
      <section className="todo-list">
        <div className="container">
          <Form onCreate={addTask} />
          <hr />
          {tasks.length ? (
            <TaskList tasks={tasks} />
          ) : (
            <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
              YAY, there is no stuff to do!
            </p>
          )}
        </div>
      </section>
    </Context.Provider>
  );
}

export default App;

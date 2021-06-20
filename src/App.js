import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import TaskList from "./components/TaskList/TaskList";

function App() {
  // Tasks
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  // Set tasks at local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, text: task.text, status: "uncomplete" };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Check task
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "complete" ? "uncomplete" : "complete",
            }
          : task
      )
    );
  };

  return (
    <div className="container">
      <Header title={"Tomatasks"}></Header>
      <Pomodoro></Pomodoro>
      <TaskList
        tasks={tasks}
        onAdd={addTask}
        onDelete={deleteTask}
        onCheck={completeTask}
      ></TaskList>
    </div>
  );
}

export default App;

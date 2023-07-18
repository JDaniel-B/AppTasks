import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [lastTask, setLastTask] = useState("");

  const getId = () => {
    const datosGuardados = JSON.parse(localStorage.getItem("Tasks"));
    setLastTask(datosGuardados[datosGuardados.length - 1]); // get id last task
  };

  const updateTasks = () => {
    setTasks(JSON.parse(localStorage.getItem("Tasks")));
  };

  useEffect(() => {
    updateTasks();
    getId();
  }, []);

  const deleteTask = (taskID) => {
    const datosGuardados = JSON.parse(localStorage.getItem("Tasks"));
    const newData = datosGuardados.filter((tarea) => tarea.id != taskID); // Elimina el elemento del array
    localStorage.setItem("Tasks", JSON.stringify(newData));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        updateTasks,
        lastTask,
        getId
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

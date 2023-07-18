import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";
import "./TaskCard.css";

function TaskCard({ task }) {
  const { deleteTask, updateTasks, getId } = useContext(TaskContext);
  const [complete, setComplete] = useState(false);



  return (
    <div
      className={`bg-gray-800 text-white p-4 rounded-md Appear ${
        complete ? "line-through bg-indigo-700" : ""
      }`}
      onClick={() => setComplete(!complete)}
    >
      <h1 className="text-2xl font-bold capitalize">{task.tittle}</h1>
      <p className="text-gray-300 tracking-widest text-lg">{task.description}</p>
      <button
        className="bg-red-500 select-none tracking-wider px-2 py-1 rounded-md mt-4 hover:bg-red-700"
        onClick={() => {
          deleteTask(task.id);
          updateTasks();
          getId();
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;

import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm() {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const { updateTasks, tasks, getId, lastTask } = useContext(TaskContext);

  function createTasks(objet) {
    const datosGuardados = JSON.parse(localStorage.getItem("Tasks"));
    datosGuardados.push(objet); // agrega el objeto al array obtenido del storage
    localStorage.setItem("Tasks", JSON.stringify(datosGuardados));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: lastTask == undefined ? 0 : lastTask.id + 1,
      tittle,
      description,
    };

    createTasks(newTask);
    updateTasks();
    getId();
    setTittle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 flex flex-col items-center p-6 mb-4"
      >
        <h1 className="text-4xl max-sm:text-2xl capitalize font-bold text-white mb-3">
          Crea tu tarea
        </h1>
        <input
          id="tittle"
          required={true}
          pattern="^[a-zA-Z0-9\s]{5,30}$"
          autoComplete="off"
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
          placeholder="Titulo de Tarea"
          className="bg-slate-300 capitalize mt-3 rounded-md p-3 w-full mb-2"
        />
        <textarea
          required
          pattern='^[a-zA-Z0-9\s]{5,30}$'
          className="bg-slate-300 rounded-md mt-3 p-3 w-full mb-2"
          value={description}
          id="description"
          placeholder="Descripcion de la Tarea"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-indigo-500 mt-3 px-3 py-1 text-lg hover:bg-indigo-700 tracking-widest rounded-md text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

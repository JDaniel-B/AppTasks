import { useEffect } from "react";
import TaskList from "./Components/Tasklist";
import TaskForm from "./Components/TaskForm";
import "./App.css";

function App() {

  window.addEventListener('storage', ()=>{
    location.reload();
  })

  function createTasks() {
    const datosGuardados = localStorage.getItem("Tasks");
    if (!datosGuardados) {
      const datosIniciales = [];
      localStorage.setItem("Tasks", JSON.stringify(datosIniciales));
    }
  }

  useEffect(() => {
    createTasks();
  }, []);

  return (
    <main className="bg-zinc-900 min-h-screen">
      <div className="container mx-auto p-9">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;

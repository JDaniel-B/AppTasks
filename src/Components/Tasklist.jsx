import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../Context/TaskContext";
import styles from './TaskList.module.css';

function Tasklist() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-5xl max-sm:text-3xl capitalize font-bold text-center">
        aun no hay tareas
      </h1>
    );
  }

  return (
    <div className={styles.Grid}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Tasklist;

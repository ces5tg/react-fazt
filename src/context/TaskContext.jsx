import { createContext  , useState , useEffect} from "react";

export const TaskContext = createContext();
import { tasks as data } from "../data/tasks";
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
    /* CREATE */
  function createTask(taskTitle, taskDescription) {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: taskDescription,
      },
    ]);
  }
  /* DELETE */
  function deleteTask(taskId) {   
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  return (<TaskContext.Provider value={{
    tasks: tasks , 
    deleteTask: deleteTask,
    createTask: createTask
  }}>{props.children}</TaskContext.Provider>);
}

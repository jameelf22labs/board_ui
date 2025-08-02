import { mockTasks } from "@/mocks/kanban.mock.data";
import Task from "./Task";

const TaskProgress = () => {
  return (
    <div>
      {mockTasks.map((task, i) => (
        <Task task={task} key={i} />
      ))}
    </div>
  );
};

export default TaskProgress;

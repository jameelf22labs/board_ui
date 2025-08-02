import type { JSX } from "react";
import TaskStatusAnalytics from "./task-status-analytics/TaskStatusAnalytics";
import TaskDoneAnalytics from "./task-done-analytics/TaskDoneAnalytics";
import TaskProgress from "./task-progress/TaskProgress";
import { useTheme } from "@/context/ThemeContext";

const Dashbaord = (): JSX.Element => {
  const { theme } = useTheme();
  return (
    <div
      className="flex  overflow-auto bg-[var(--kanban-bg)] h-[100vh] w-[100vw]"
      style={{ padding: 30 , backgroundColor : theme === "light" ? "#f3f4f8" : "black" }}
    >
      <div className="analytics-section h-full  w-[70%]">
        <TaskStatusAnalytics />
        <TaskDoneAnalytics />
        <TaskProgress />
      </div>
      <div className="schedule-section  h-full w-[30%]"></div>
    </div>
  );
};

export default Dashbaord;

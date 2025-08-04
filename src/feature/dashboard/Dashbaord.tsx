import type { JSX } from "react";
import TaskStatusAnalytics from "./task-status-analytics/TaskStatusAnalytics";
import TaskDoneAnalytics from "./task-done-analytics/TaskDoneAnalytics";
import TaskProgress from "./task-progress/TaskProgress";
import { useTheme } from "@/context/ThemeContext";
import Schedule from "./schedules/Schedule";
import React from "react";
import { EventNames } from "@/core/events/event.constant";
import useEventEmitter from "@/hooks/useEventEmitter";

const Dashboard = (): JSX.Element => {
  const { theme } = useTheme();
  const [isOpenDrawer, setIsOpenDrawer] = React.useState<boolean>(false);

  useEventEmitter<boolean>(EventNames.OpenTaskSchedule, (canOpen) => {
    setIsOpenDrawer(canOpen);
  });

  return (
    <div
      className="flex overflow-auto h-screen w-screen transition-all duration-300"
      style={{
        backgroundColor: theme === "light" ? "#f3f4f8" : "black",
        justifyContent: isOpenDrawer ? "flex-start" : "center",
        padding: 30
      }}
    >
      <div className="analytics-section flex flex-col gap-5 w-full md:w-[70%]">
        <TaskStatusAnalytics />
        <TaskDoneAnalytics />
        <TaskProgress />
      </div>

      {isOpenDrawer && (
        <div className="schedule-section h-full w-[30%] ml-5">
          <Schedule
            isOpenDrawer={isOpenDrawer}
            setIsOpenDrawer={setIsOpenDrawer}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;

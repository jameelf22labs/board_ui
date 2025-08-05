import React from "react";
import TaskStatusAnalytics from "./task-status-analytics/TaskStatusAnalytics";
import TaskDoneAnalytics from "./task-done-analytics/TaskDoneAnalytics";
import TaskProgress from "./task-progress/TaskProgress";
import Schedule from "./schedules/Schedule";
import useEventEmitter from "@/hooks/useEventEmitter";
import type { JSX } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useMediaQuery } from "@mui/material";
import { EventNames } from "@/core/events/event.constant";
import Space from "@/components/ui/Space";

const Dashboard = (): JSX.Element => {
  const { theme } = useTheme();
  const [isOpenDrawer, setIsOpenDrawer] = React.useState<boolean>(true);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEventEmitter<boolean>(EventNames.OpenTaskSchedule, (canOpen) => {
    setIsOpenDrawer(canOpen);
  });

  return (
    <div
      className="flex overflow-auto h-screen w-screen transition-all duration-300"
      style={{
        backgroundColor: theme === "light" ? "#f3f4f8" : "black",
        justifyContent: isOpenDrawer ? "flex-start" : "center",
        padding: 30,
      }}
    >
      <div className="analytics-section flex flex-col gap-5 w-full md:w-[60%]">
        <TaskStatusAnalytics />
        <TaskDoneAnalytics />
        <TaskProgress />

        <Space height={100} />
      </div>

      {isOpenDrawer && (
        <div
          className={`schedule-section h-full ${
            isMobile ? "w-full" : "w-[40%] ml-5"
          }`}
        >
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

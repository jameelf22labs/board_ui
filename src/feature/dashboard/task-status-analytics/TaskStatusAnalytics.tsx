import React from "react";
import { MockFactory } from "@/mocks/mock.factory";
import type { AggregatedTaskKey } from "@/mocks/types";
import { CiStar } from "react-icons/ci";
import { LineChart } from "@mui/x-charts/LineChart";
import "./style.css";
import { useTheme } from "@/context/ThemeContext";

const TaskStatusAnalytics = () => {
  const mockInstance = React.useMemo(() => MockFactory.createKanban(), []);
  const [taskStatus, setTaskStatus] = React.useState<AggregatedTaskKey[]>([]);

  const { theme } = useTheme();

  React.useEffect(() => {
    setTaskStatus(["completedTask", "newTask", "done"]);
  }, []);

  const mapStatus = (status: string) => {
    switch (status) {
      case "completedTask":
        return "Task Completed";
      case "newTask":
        return "New Task";
      case "done":
        return "Project Done";
    }
  };

  const mapColor = {
    completedTask: "#5051F9",
    newTask: "#1EA7FF",
    done: "#FF614C",
  };

  return (
    <div className="flex gap-[40px] items-center w-full">
      {taskStatus.map((status) => {
        const taskStatusData = mockInstance.getAggregated(
          status as AggregatedTaskKey
        );
        return (
          <div
            key={status}
            style={{
              padding: 20,
              backgroundColor: theme === "light" ? "#FFFFFF" : "#1E1F25",
            }}
            className="w-[424px] h-[210px] rounded-[16px] p-5 flex flex-col justify-between shadow"
          >
            <div className="flex justify-around items-center gap-2">
              <div
                style={{
                  backgroundColor: theme === "light" ? "#F3F7FD" : "#282932",
                }}
                className="w-[44px] h-[44px] bg-[#F3F7FD] text-[#8D98A9] rounded-3xl flex items-center justify-center text-2xl"
              >
                <CiStar />
              </div>
              <h3 className="font-medium text-[20px] text-[#8C97A8]">
                {mapStatus(status)}
              </h3>
              <h3 className="font-bold text-[29px] text-[#768396]">
                {taskStatusData.count}
              </h3>
            </div>
            <div className="mt-2 p-0 flex justify-between items-center">
              <LineChart
                xAxis={[
                  {
                    data: taskStatusData.lastMonths,
                    disableLine: true,
                    disableTicks: true,
                    label: "",
                    valueFormatter: () => "",
                  },
                ]}
                yAxis={[
                  {
                    disableLine: true,
                    disableTicks: true,
                    label: "",
                    valueFormatter: () => "",
                  },
                ]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    color: mapColor[status],
                  },
                ]}
                height={150}
                width={200}
              />

              <div>
                <h6 className="text-[#768396]">
                  {" "}
                  <span className="text-[#73bb5a]">
                    {" "}
                    {taskStatusData.lastWeek} +{" "}
                  </span>{" "}
                  more <br /> from last week{" "}
                </h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStatusAnalytics;

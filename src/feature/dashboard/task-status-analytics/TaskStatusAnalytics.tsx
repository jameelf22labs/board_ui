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
    <div className="flex flex-wrap gap-5 w-full">
      {taskStatus.map((status) => {
        const taskStatusData = mockInstance.getAggregated(
          status as AggregatedTaskKey
        );

        return (
          <div
            key={status}
            className="flex flex-col justify-between rounded-2xl shadow w-full sm:w-[90%] md:w-[48%] lg:w-[28%] xl:w-[32%] min-w-[274px]"
            style={{
              backgroundColor: theme === "light" ? "#FFFFFF" : "#1E1F25",
              padding: "calc(var(--spacing) * 5)",
            }}
          >
            <div className="flex justify-between items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: theme === "light" ? "#F3F7FD" : "#282932",
                  color: "#8D98A9",
                }}
              >
                <CiStar />
              </div>
              <h3 className="font-medium text-xl text-[#8C97A8]">
                {mapStatus(status)}
              </h3>
              <h3 className="font-bold text-2xl text-black">
                {taskStatusData.count}
              </h3>
            </div>

            <hr style={{ marginTop: 20 }} />

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="w-full sm:w-[60%] h-[120px]">
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
                  height={120}
                />
              </div>
              <div className="text-center sm:text-left text-lg text-[#768396]">
                <span className="text-[#73bb5a] font-medium">
                  {taskStatusData.lastWeek} +{" "}
                </span>
                more <br /> from last week
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskStatusAnalytics;

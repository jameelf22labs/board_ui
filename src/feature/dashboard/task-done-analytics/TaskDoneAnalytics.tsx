import { useTheme } from "@/context/ThemeContext";
import { monthlyTaskReport } from "@/mocks/kanban.mock.data";
import type { JSX } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const TaskDoneAnalytics = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div
      className="flex flex-col gap-3 p-5 w-full"
      style={{
        padding: 20,
        marginTop: 30,
        backgroundColor: theme === "light" ? "#FFFFFF" : "#1E1F25",
      }}
    >
      <div
        className="flex justify-between"
        style={{ color: theme === "light" ? "#232360" : "#FAFAFA" }}
      >
        <h6 className="font-bold text-[24px]">Task Done</h6>
        <div className="flex gap-6 font-medium text-[18px]">
          <h6>Daily</h6>
          <h6>Weekly</h6>
          <h6 className="underline text-[#1EA7FF]">Monthly</h6>
        </div>
      </div>

      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={monthlyTaskReport}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TaskDoneAnalytics;

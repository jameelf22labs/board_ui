import type { JSX } from "react";
import { CiClock1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { Slider } from "@mui/material";
import type { TaskItem } from "@/mocks/types";
import { useTheme } from "@/context/ThemeContext";

const Task = ({ task }: { task: TaskItem }): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div
      className="w-full bg-white rounded-xl shadow-sm  flex flex-col lg:flex-row gap-4 lg:items-center"
      style={{
        marginTop: 30,
        backgroundColor: theme === "light" ? "#FFFFFF" : "#1E1F25",
        paddingInline: "calc(var(--spacing) * 4)",
        paddingBlock: "calc(var(--spacing) * 4)",
      }}
    >
      <div
        className="flex items-center gap-5 rounded-xl w-full lg:w-[230px]"
        style={{
          backgroundColor: theme === "light" ? "#FBFAFF" : "#212229",
          paddingInline: "calc(var(--spacing) * 4)",
          paddingBlock: "calc(var(--spacing) * 3)",
        }}
      >
        <div className="h-[35px] w-[35px] rounded-full flex items-center justify-center bg-[#5051F9] text-white shrink-0">
          <FaPlay size={12} />
        </div>
        <div className="text-sm">
          <p className="text-[16px] font-medium text-gray-600 max-[400px]:text-[14px]">
            Start from
          </p>
          <div className="flex gap-2 items-center text-[16px] text-[#778399] max-[400px]:text-[14px]">
            <CiClock1 />
            <span>{task.startTime}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm text-gray-800 w-full">
        <p className="font-bold text-[20px] text-[#23235F] max-[400px]:text-[16px]">
          {task.title}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[14px] text-[#5051F9]">
          <div className="flex items-center gap-1">
            <FiLink2 />
            <a
              href={task.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline break-words"
            >
              {new URL(task.link).hostname}
            </a>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaRegCommentDots />
            <span>{task.comments} comments</span>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[160px]">
        <span className="text-[18px] font-bold text-gray-700 mb-1 block max-[400px]:text-[16px]">
          {task.completion}% complete
        </span>
        <Slider
          aria-label="Completion"
          value={task.completion}
          color="secondary"
          sx={{
            color: "#23B2FF",
            "& .MuiSlider-thumb": {
              display: "none",
            },
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-rail": {
              opacity: 0.5,
              backgroundColor: "#bfbfbf",
            },
          }}
        />
      </div>

      <div className="w-full sm:w-auto">
        <button
          style={{
            paddingInline: "calc(var(--spacing) * 3)",
            paddingBlock: "calc(var(--spacing) * 2)",
          }}
          className="flex items-center justify-center gap-1 w-full sm:w-[180px] rounded-lg text-[#5051F9] bg-[#F1EEFF] text-[16px] max-[400px]:text-[14px]"
        >
          <LuAlarmClock />
          Reminder
        </button>
      </div>
    </div>
  );
};

export default Task;

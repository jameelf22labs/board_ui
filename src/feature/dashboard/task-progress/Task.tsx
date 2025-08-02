import type { JSX } from "react";
import { CiClock1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { FiLink2 } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { Slider } from "@mui/material";
import type { TaskItem } from "@/mocks/types";

const Task = ({ task }: { task: TaskItem }): JSX.Element => {
  return (
    <div
      className="flex items-center w-full bg-white h-[85px] rounded-xl shadow-sm px-4"
      style={{ marginTop: 30 }}
    >
      <div className="flex justify-center items-center bg-[#FBFAFF] h-full w-[230px] px-5 gap-5 rounded-xl">
        <div className="h-[35px] w-[35px] rounded-full flex items-center justify-center bg-[#5051F9] text-white">
          <FaPlay size={12} />
        </div>
        <div className="text-sm">
          <p className="text-[20px] font-medium text-gray-600">Start from</p>
          <div className="flex gap-2 items-center text-[18px] text-[#778399]">
            <CiClock1 />
            <span>{task.startTime}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-16 items-center" style={{ marginLeft: 30 }}>
        <div className="flex flex-col gap-1 text-sm text-gray-800">
          <p className="font-bold text-[22px] text-[#23235F]">{task.title}</p>
          <div className="flex gap-20 text-[16px] text-[#5051F9] items-center">
            <div className="flex items-center gap-1">
              <FiLink2 />
              <a
                href={task.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
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

        <div className="flex flex-col w-[160px] text-sm">
          <span className="text-[20px] font-bold text-gray-700 mb-1">
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

        <div>
          <button className="flex items-center justify-center h-[60px] w-[180px] gap-1 px-3 py-1 rounded-lg text-[#5051F9] bg-[#F1EEFF] text-[20px]">
            <LuAlarmClock />
            Reminder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;

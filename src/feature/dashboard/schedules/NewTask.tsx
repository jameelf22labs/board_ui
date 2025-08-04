import { useTheme } from "@/context/ThemeContext";
import { SendRounded } from "@mui/icons-material";
import { useState, type JSX } from "react";

const emojis = ["🎉", "😍", "😄", "🔥", "😘", "😉", "😎", "🙄"];

const collaborators = [
  {
    name: "Angela",
    color: "bg-purple-200",
    textColor: "text-purple-700",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Chris",
    color: "bg-blue-200",
    textColor: "text-blue-700",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const NewTask = (): JSX.Element => {
  const [title, setTitle] = useState("Create new");
  const {theme} = useTheme();

  return (
    <div className="w-full " style={{ marginTop: 30 }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[22px] font-bold text-[#232360]">New Task</h3>
        <div className="text-gray-400 text-xl">⋮</div>
      </div>

      <label className="text-[18px] text-[#6B6F76] mb-1 block">
        Task Title
      </label>
      <input
        type="text"
        className="w-full  rounded-[30px]  focus:outline-none"
        value={title}
        style={{ padding: 15 , backgroundColor : theme === "light" ? "#F1F3F9" : "#050505" }}
        placeholder="Create new task"
        onChange={(e) => setTitle(e.target.value)}
      />

      <div
        className="flex justify-between items-center my-4 text-[22px]"
        style={{ marginBlock: 16 }}
      >
        <span className="cursor-pointer">{`<`}</span>
        <div className="flex gap-2 overflow-x-auto">
          {emojis.map((emoji, idx) => (
            <span key={idx} className="cursor-pointer">
              {emoji}
            </span>
          ))}
        </div>
        <span className="cursor-pointer">{`>`}</span>
      </div>

      <label className="text-[16px] text-[#6B6F76] mb-1 block">
        Add Collaborators
      </label>
      <div
        className="flex items-center  gap-3 flex-wrap"
        style={{ marginTop: 10 }}
      >
        {collaborators.map((col, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-1 px-3 py-1 rounded-full ${col.color} ${col.textColor}`}
          >
            <img
              src={col.avatar}
              alt={col.name}
              className="w-12 h-8 rounded-full"
              style={{ margin: 2 }}
            />
            <span className="text-sm">{col.name}</span>
            <span className="text-xs cursor-pointer">×</span>
          </div>
        ))}

        <div className="w-8 h-8 rounded-full bg-[#F1F3F9] flex items-center justify-center text-xl text-gray-600 cursor-pointer">
          +
        </div>

        <div className="w-8 h-8 rounded-full bg-[#5E5BF8] flex items-center justify-center text-white text-xl cursor-pointer">
          <SendRounded />
        </div>
      </div>
    </div>
  );
};

export default NewTask;

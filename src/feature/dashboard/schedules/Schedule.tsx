import { useTheme } from "@/context/ThemeContext";
import { messages } from "@/mocks/message.mocks";
import {
  AppBlocking,
  CalendarMonthOutlined,
  Dashboard,
} from "@mui/icons-material";
import NewTask from "./NewTask";

const Schedule = () => {
  const { theme } = useTheme();

  return (
    <div
      className="flex flex-col h-full"
      style={{
        padding: 30,
        backgroundColor: theme === "light" ? "#FFFFFF" : "#1E1F25",
      }}
    >
      <div className="flex items-center justify-between">
        <h6 className="font-bold text-[23px]"> Today’s Scheudle </h6>
        <div
          className="bg-[#F4F4F4] rounded-2xl"
          style={{ padding: 10, color: "#768396" }}
        >
          <Dashboard />
          <CalendarMonthOutlined />
        </div>
      </div>

      <div
        className="flex items-center justify-between gap-2"
        style={{ marginTop: 20 }}
      >
        <div>
          <h6 className="text-[#1EA7FF]"> 30 minute call with Client </h6>
          <h6 className="tex-[#232360] text-[21px]">
            {" "}
            Project Discovery Call{" "}
          </h6>
        </div>
        <h6 className="text-[#1EA7FF]"> + Invite </h6>
      </div>

      <div
        className="flex items-center justify-between bg-[#5E5BF8] text-white rounded-xl w-full gap-4"
        style={{ padding: 20, marginTop: 30 }}
      >
        <div className="flex -space-x-3">
          <img
            className="w-8 h-8 rounded-full border-2 border-white"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="avatar"
          />
          <img
            className="w-8 h-8 rounded-full border-2 border-white"
            src="https://randomuser.me/api/portraits/men/33.jpg"
            alt="avatar"
          />
          <img
            className="w-8 h-8 rounded-full border-2 border-white"
            src="https://randomuser.me/api/portraits/men/34.jpg"
            alt="avatar"
          />
          <div className="w-8 h-8 rounded-full bg-white text-[#5E5BF8] text-sm font-bold flex items-center justify-center border-2 border-white">
            R
          </div>
        </div>

        <div className="text-sm font-medium">28:35</div>

        <div className="flex items-center gap-3 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-4.553a1 1 0 011.414 0l2.586 2.586a1 1 0 010 1.414L18 15M6.343 17.657a9 9 0 0112.728 0M4.929 16.243a11 11 0 0115.556 0"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 13a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 15a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
          </svg>
        </div>
      </div>

      <div className="w-full" style={{ marginTop: 30 }}>
        <h2 style={{ marginBottom : 20}} className="text-[#232360] font-bold text-[21px]">Messages</h2>
        <div className="flex flex-col gap-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <div className={`rounded-full p-1 ${msg.bg}`}>
                <img
                  src={msg.avatar}
                  alt={msg.name}
                  className="w-10 h-10 rounded-full border border-white"
                />
              </div>
              <div className="flex flex-col text-[21px]">
                <span className="text-[#232360] font-semibold leading-tight">
                  {msg.name}
                </span>
                <span className="text-[#6B6F76] text-sm truncate max-w-[180px]">
                  {msg.message}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NewTask />
    </div>
  );
};

export default Schedule;

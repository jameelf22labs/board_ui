import React, { type JSX } from "react";
import useEventEmitter from "../../hooks/useEventEmitter";
import { EventNames } from "../../core/events/event.constant";
import { useNavigate } from "react-router-dom";
import { ScheduleOutlined } from "@mui/icons-material";
import { RiDashboardFill, RiKanbanView2 } from "react-icons/ri";
import { IoSend, IoSettingsOutline } from "react-icons/io5";
import clsx from "clsx";

enum NavOptions {
  DashBoard = "Dashboard",
  Setting = "Setting",
  Kanban = "Kanban",
  Message = "Message",
  Folder = "Folder",
  Schedule = "Schedule",
}

const Navbar = (): JSX.Element => {
  const publish = useEventEmitter<boolean>(EventNames.OpenGroupChat);
  const publishSchedule = useEventEmitter<boolean>(EventNames.OpenTaskSchedule);
  const [active, setActive] = React.useState<NavOptions>(NavOptions.DashBoard);
  const navigate = useNavigate();

  const handleClick = (option: NavOptions) => {
    setActive(option);
    switch (option) {
      case NavOptions.DashBoard:
        navigate("/");
        break;
      case NavOptions.Kanban:
        navigate("/board");
        break;
    }
  };

  const navItems = React.useMemo(
    () => [
      {
        icon: <RiDashboardFill size={24} />,
        option: NavOptions.DashBoard,
        title: "Dashboard",
      },
      {
        icon: <RiKanbanView2 size={24} />,
        option: NavOptions.Kanban,
        title: "Kanban",
      },
      {
        icon: <IoSettingsOutline size={24} />,
        option: NavOptions.Setting,
        title: "Settings",
      },
      {
        icon: <IoSend size={24} />,
        option: NavOptions.Message,
        title: "Messages",
        onClick: () => publish(true),
      },
      {
        icon: (
          <ScheduleOutlined
            sx={{ fontSize: 24 }}
            style={{ color: "#5F6388" }}
          />
        ),
        option: NavOptions.Schedule,
        title: "Schedule",
        onClick: () => publishSchedule(true),
      },
    ],
    [publish, publishSchedule]
  );

  return (
    <nav
      style={{ padding: 20 }}
      className="h-full w-[224px] bg-[var(--side-bar-bg)] flex flex-col items-center justify-center gap-6 max-[550px]:w-full max-[550px]:flex-row max-[550px]:py-4"
    >
      {navItems.map(({ icon, option, title, onClick }) => (
        <div
          key={option}
          title={title}
          role="button"
          onClick={() => {
            handleClick(option);
            onClick?.();
          }}
          className={clsx(
            "text-[#8C97A8] hover:text-white transition-colors duration-200 p-2 rounded-xl cursor-pointer",
            active === option && "bg-[#5051F9] text-white"
          )}
          style={{ padding: active === option ? 10 : 5 }}
        >
          {icon}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;

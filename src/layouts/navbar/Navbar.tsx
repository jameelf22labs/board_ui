import type { JSX } from "@emotion/react/jsx-runtime";
import AppSVG from "../../svg/AppSVG";
import KanbanSVG from "../../svg/KanbanSVG";
import Setting from "../../svg/Setting";
import MessageSVG from "../../svg/MessageSVG";
import FolderSVG from "../../svg/FolderSVG";
import useEventEmitter from "../../hooks/useEventEmitter";
import { EventNames } from "../../core/events/event.constant";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ScheduleOutlined } from "@mui/icons-material";

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
        return;
      case NavOptions.Kanban:
        navigate("/board");
        return;
    }
  };

  return (
    <div className="h-full w-[124px] bg-[var(--side-bar-bg)] flex flex-col items-center justify-center gap-[30px] max-[550px]:w-full max-[550px]:flex-row max-[550px]:pb-5">
      <div onClick={() => handleClick(NavOptions.DashBoard)}>
        <AppSVG />
      </div>
      <div onClick={() => handleClick(NavOptions.Setting)}>
        <Setting />
      </div>
      <div onClick={() => handleClick(NavOptions.Kanban)}>
        <KanbanSVG />
      </div>
      <div
        onClick={() => {
          publish(true);
          handleClick(NavOptions.DashBoard);
        }}
      >
        <MessageSVG />
      </div>
      <div onClick={() => handleClick(NavOptions.Folder)}>
        <FolderSVG />
      </div>
      <div
        onClick={() => {
          publishSchedule(true);
          handleClick(NavOptions.Schedule);
        }}
      >
        <ScheduleOutlined style={{ color: "#5F6388", width: 30, height: 30 }} />
      </div>
    </div>
  );
};

export default Navbar;

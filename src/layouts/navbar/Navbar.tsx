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

enum NavOptions {
  DashBoard = "Dashboard",
  Setting = "Setting",
  Kanban = "Kanban",
  Message = "Message",
  Folder = "Folder",
}

const Navbar = (): JSX.Element => {
  const publish = useEventEmitter<boolean>(EventNames.OpenGroupChat);
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
    </div>
  );
};

export default Navbar;

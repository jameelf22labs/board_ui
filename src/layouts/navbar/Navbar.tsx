import type { JSX } from "@emotion/react/jsx-runtime";
import Style from "./Navbar.module.css";
import AppSVG from "../../svg/AppSVG";
import KanbanSVG from "../../svg/KanbanSVG";
import Setting from "../../svg/Setting";
import MessageSVG from "../../svg/MessageSVG";
import FolderSVG from "../../svg/FolderSVG";
import useEventEmitter from "../../hooks/useEventEmitter";
import { EventNames } from "../../core/events/event.constant";

const Navbar = (): JSX.Element => {
  const publish = useEventEmitter<boolean>(EventNames.OpenGroupChat);
  return (
    <div className={Style.navbar}>
      <AppSVG />
      <Setting />
      <KanbanSVG />
      <div
        onClick={() => {
          console.log('Open Message Board')
          setTimeout(() => publish(true), 100);
        }}
      >
        <MessageSVG />
      </div>

      <FolderSVG />
    </div>
  );
};

export default Navbar;

import type { JSX } from "@emotion/react/jsx-runtime";
import Style from "./Navbar.module.css";
import AppSVG from "../../svg/AppSVG";
import KanbanSVG from "../../svg/KanbanSVG";
import Setting from "../../svg/Setting";
import MessageSVG from "../../svg/MessageSVG";
import FolderSVG from "../../svg/FolderSVG";

const Navbar = (): JSX.Element => {
  return (
    <div className={Style.navbar}>
      <AppSVG />
      <Setting />
      <KanbanSVG />
      <MessageSVG />
      <FolderSVG />
    </div>
  );
};

export default Navbar;

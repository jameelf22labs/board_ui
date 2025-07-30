import type { JSX } from "react";
import Style from "./Home.module.css";
import { Navbar, ProfileLayout } from "../../layouts";
import KanbanBoard from "./components/kanban-board/KanbanBoard";

const Home = (): JSX.Element => {
  return (
    <div className={Style.homeRoot}>
      <ProfileLayout />
      <div style={{ display: "flex",  width: "100%", height: "100%" }}>
        <Navbar />
        <KanbanBoard />
      </div>
    </div>
  );
};

export default Home;

import type { JSX } from "react";
import Style from "./Home.module.css";
import KanbanBoard from "./components/kanban-board/KanbanBoard";
import GroupChat from "./components/group-chat/GroupChat";

const Home = (): JSX.Element => {
  return (
    <div className={Style.homeRoot}>
      <div className={Style.contentWrapper}>
        <KanbanBoard />
      </div>

      <GroupChat />
    </div>
  );
};

export default Home;

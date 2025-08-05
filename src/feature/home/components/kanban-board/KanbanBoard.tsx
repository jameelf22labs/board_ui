import type { JSX } from "@emotion/react/jsx-runtime";
import React from "react";
import Style from "./Kanban.module.css";
import { Avatar, AvatarGroup } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { BiPlusCircle } from "react-icons/bi";
import { type BoardStatus } from "../../../../mocks/kanban.mock";
import type { Task } from "../../../../mocks/types";
import { getRandomColor } from "../../../../utils/common.utils";
import useEventEmitter from "../../../../hooks/useEventEmitter";
import { EventNames } from "../../../../core/events/event.constant";
import { useTheme } from "../../../../context/ThemeContext";
import { MockFactory } from "../../../../mocks/mock.factory";

type StatusCardProps = {
  status: BoardStatus;
};

const TaskCard = ({ task }: { task: Task }): JSX.Element => {
  const { theme } = useTheme();
  return (
    <div
      className={Style.taskCard}
      style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1E1F25" }}
    >
      <h6
        className={Style.category}
        style={{ backgroundColor: getRandomColor(), padding: "16 8 16 8" }}
      >
        {task.category}
      </h6>
      <div className={Style.banner}>
        {task.backgroundImage && (
          <img src={task.backgroundImage} alt="Banner" />
        )}
      </div>
      <h6
        className={Style.title}
        style={{ color: theme === "light" ? "#232360" : "#F6F6F6" }}
      >
        {task.title}
      </h6>
      <h6 className={Style.desc} style={{ color: "#768396" }}>
        {task.description}
      </h6>
      <h6
        className={Style.issueDate}
        style={{ color: theme === "light" ? "#232360" : "#F6F6F6" }}
      >
        {task.issueDate}
      </h6>
      <div className={Style.members}>
        <AvatarGroup spacing={24}>
          {task.members.map((user) => (
            <Avatar alt={user} src="/static/images/avatar/3.jpg" />
          ))}
        </AvatarGroup>

        <p> 0/8 </p>
      </div>
    </div>
  );
};

const StatusCard = ({ status }: StatusCardProps): JSX.Element => {
  const mock = React.useMemo(() => MockFactory.createKanban(), []);
  const [allTask, setAllTask] = React.useState<Task[]>([]);
  const [query, setQuery] = React.useState<string>("");
  const { theme } = useTheme();
  useEventEmitter<string>(EventNames.SearchTitle, (query) => {
    setQuery(query);
  });

  React.useEffect(() => {
    const fetchAllTasks = async () => {
      if (query.length > 0) {
        const allTasks = await mock.searchByTitle(query, status);
        setAllTask(allTasks);
        return;
      }
      const allTasks = await mock.get(status);
      setAllTask(allTasks);
    };

    fetchAllTasks();
  }, [mock, query]);

  return (
    <div>
      <div
        className={Style.statusCard}
        style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#1E1F25" }}
      >
        <h6>{status}</h6>
        <div className={Style.options}>
          <MoreHoriz style={{ width: 30, height: 30 }} />
          <BiPlusCircle style={{ width: 20, height: 20 }} />
        </div>
      </div>

      <div className={Style.taskCardWrapper}>
        {allTask.map((task, i) => (
          <TaskCard task={task} key={i} />
        ))}
      </div>
    </div>
  );
};

const KanbanBoard = (): JSX.Element => {
  const mock = React.useMemo(() => MockFactory.createKanban(), []);
  const [allStatus, setAllStatus] = React.useState<BoardStatus[]>([]);

  React.useEffect(() => {
    const fetchStatuses = async () => {
      const statusList = await mock.getAllStatus();
      setAllStatus(statusList);
    };
    fetchStatuses();
  }, [mock]);

  return (
    <div className={Style.kanbanBoardWrapper}>
      <div className={Style.headWrapper}>
        <div className={Style.header}>
          <h6>🔥 Task</h6>
        </div>

        <div className={Style.avatarGroup}>
          <AvatarGroup spacing={24}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </AvatarGroup>
          <h6>+10</h6>
        </div>
      </div>

      <div className={Style.boardWrapper}>
        <div className={Style.statusCardWrapper}>
          {allStatus.map((status) => (
            <StatusCard key={status} status={status} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;

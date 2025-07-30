import type { JSX } from "@emotion/react/jsx-runtime";
import React from "react";
import Style from "./Kanban.module.css";
import { Avatar, AvatarGroup } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { BiPlusCircle } from "react-icons/bi";
import kanbanBoardMock from "../../../../mocks/kanban.mock.data";
import { KanbanMock, type BoardStatus } from "../../../../mocks/kanban.mock";
import type { Task } from "../../../../mocks/types";
import { getRandomColor } from "../../../../utils/common.utils";

type StatusCardProps = {
  status: BoardStatus;
};

const TaskCard = ({ task }: { task: Task }): JSX.Element => {
  return (
    <div className={Style.taskCard}>
      <h6
        className={Style.category}
        style={{ backgroundColor: getRandomColor() }}
      >
        {task.category}
      </h6>

      <div className={Style.banner}>
        {task.backgroundImage && (
          <img src={task.backgroundImage} alt="Banner" />
        )}
      </div>

      <h6 className={Style.title}>{task.title}</h6>

      <h6 className={Style.desc}>{task.description}</h6>

      <h6 className={Style.issueDate}>{task.issueDate}</h6>

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
  const mock = React.useMemo(() => new KanbanMock(kanbanBoardMock), []);
  const [allTask, setAllTask] = React.useState<Task[]>([]);

  React.useEffect(() => {
    const fetchAllTasks = async () => {
      const allTasks = await mock.get(status);
      setAllTask(allTasks);
    };

    fetchAllTasks();
  }, [mock]);

  return (
    <div>
      <div className={Style.statusCard}>
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
  const mock = React.useMemo(() => new KanbanMock(kanbanBoardMock), []);
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

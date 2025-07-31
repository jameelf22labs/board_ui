import type { JSX } from "react";
import Style from "./GroupChat.module.css";
import useEventEmitter from "../../../../hooks/useEventEmitter";
import { EventNames } from "../../../../core/events/event.constant";
import React from "react";
import { Avatar, AvatarGroup, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "../../../../context/ThemeContext";

import member1 from "../../../../assets/member.jpg";
import member2 from "../../../../assets/member1.jpg";
import member3 from "../../../../assets/member2.jpg";
import member4 from "../../../../assets/member3.jpg";
import member5 from "../../../../assets/member4.jpg";
import member6 from "../../../../assets/memebr4.jpg";

const GroupChat = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
  const { theme } = useTheme();

  useEventEmitter<boolean>(EventNames.OpenGroupChat, (isOpen) => {
    setIsDrawerOpen(isOpen);
  });

  return (
    <div className={Style.groupChat}>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        hideBackdrop
        ModalProps={{ BackdropProps: { invisible: true } }}
        PaperProps={{
          sx: {
            width: 400,
            height: "100%",
            top: 75,
            right: 0,
            borderRadius: 2,
            position: "absolute",
            boxShadow: "none",
            backgroundColor: theme === "light" ? "#fbfaff" : "#1E1F25",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "8px",
          }}
        >
          <IconButton onClick={() => setIsDrawerOpen(false)}>
            <CloseIcon
              style={{ color: theme === "dark" ? "white" : undefined }}
            />
          </IconButton>
        </div>

        <div className={Style.membersWrapper}>
          <div className={Style.header}>
            <h6 className={Style.member}>
              Members <span> (60) </span>
            </h6>
            <h6 className={Style.viewAll}>View All</h6>
          </div>

          <div className={Style.avatarWrapper}>
            <Avatar alt={"A"} src={member1} />
            <Avatar alt={"A"} src={member2} />
            <Avatar alt={"A"} src={member3} />
            <Avatar alt={"A"} src={member4} />
            <Avatar alt={"A"} src={member5} />
            <Avatar alt={"A"} src={member6} />
          </div>

          <div>
            <h6 className={Style.member} style={{ marginTop : '20px' }}> Group Chat </h6>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default GroupChat;

import type { JSX } from "react";
import Style from "./GroupChat.module.css";
import useEventEmitter from "../../../../hooks/useEventEmitter";
import { EventNames } from "../../../../core/events/event.constant";
import React from "react";
import { Avatar, Drawer, IconButton, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "../../../../context/ThemeContext";
import { MoreHoriz } from "@mui/icons-material";
import type { Message } from "../../../../mocks/types";
import { groupChats } from "../../../../mocks/chat.mock.data";

import member1 from "../../../../assets/member.jpg";
import member2 from "../../../../assets/member1.jpg";
import member3 from "../../../../assets/member2.jpg";
import member4 from "../../../../assets/member3.jpg";
import member5 from "../../../../assets/member4.jpg";
import member6 from "../../../../assets/memebr4.jpg";
import { MdKeyboardVoice } from "react-icons/md";

const Message = ({ message }: { message: Message }): JSX.Element => {
  const { theme } = useTheme();
  const isMe = message.user === "me";
  return (
    <div
      className={Style.message}
      style={{
        display: "flex",
        gap: 10,
        flexDirection: isMe ? "row-reverse" : "row",
      }}
    >
      <div className={Style.avatar}>
        <Avatar src={message.avatar} alt={message.user} />
      </div>
      <div
        className={Style.messageContent}
        style={{
          backgroundColor: theme === "light" ? "#F3F5F7" : "#282932",
        }}
      >
        <h6> {message.message} </h6>
      </div>
    </div>
  );
};

const GroupChat = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const chatListRef = React.useRef<HTMLDivElement | null>(null);

  useEventEmitter<boolean>(EventNames.OpenGroupChat, (isOpen) => {
    setIsDrawerOpen(isOpen);
  });

  React.useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [groupChats]);

  return (
    <div className={Style.groupChat}>
      <Drawer
        variant="persistent"
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        hideBackdrop
        ModalProps={{ BackdropProps: { invisible: true } }}
        PaperProps={{
          sx: {
            width: isMobile ? "100%" : 400,
            height: "100%",
            top: 60,
            right: 0,
            borderRadius: 2,
            position: "absolute",
            boxShadow: "none",
            backgroundColor: theme === "light" ? "white" : "#1E1F25",
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
            <h6 className={Style.member} style={{ marginTop: "20px" }}>
              Group Chat
            </h6>

            <div className={Style.chatList} ref={chatListRef}>
              {groupChats.map((chat, index) => {
                const isMe = chat.user === "me";
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: isMe ? "flex-end" : "flex-start",
                      marginBottom: "8px",
                    }}
                  >
                    <Message message={chat} />
                  </div>
                );
              })}
            </div>

            <div className={Style.sendMessageWrapper}>
              <div className={Style.messageInputField}>
                <input
                  type="text"
                  placeholder="Write here..."
                  style={{
                    backgroundColor: theme === "light" ? "#F3F5F7" : "#282932",
                  }}
                />
              </div>

              <div className={Style.options}>
                <MdKeyboardVoice
                  style={{ color: theme === "light" ? "#768396" : "#D1D1D1" }}
                />
                <MoreHoriz
                  style={{ color: theme === "light" ? "#768396" : "#D1D1D1" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default GroupChat;

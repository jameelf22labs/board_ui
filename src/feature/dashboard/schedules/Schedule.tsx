import { useTheme } from "@/context/ThemeContext";
import { messages } from "@/mocks/message.mocks";
import {
  CalendarMonthOutlined,
  Dashboard,
  MoreHoriz,
  PhoneCallback,
} from "@mui/icons-material";
import NewTask from "./NewTask";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import Space from "@/components/ui/Space";

export interface ScheduleProps {
  isOpenDrawer: boolean;
  setIsOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Schedule = ({ isOpenDrawer, setIsOpenDrawer }: ScheduleProps) => {
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");

  const callMembers = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/33.jpg",
    "https://randomuser.me/api/portraits/men/34.jpg",
  ];

  return (
    <div className="w-full h-full">
      <Drawer
        variant="persistent"
        anchor="right"
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        hideBackdrop
        ModalProps={{ BackdropProps: { invisible: true } }}
        PaperProps={{
          sx: {
            width: isMobile ? "100%" : 650,
            height: "100%",
            top: 60,
            right: 0,
            borderRadius: 0,
            position: "fixed",
            boxShadow: "none",
            backgroundColor: theme === "light" ? "white" : "#1E1F25",
            margin: 0,
            border: 'none'
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
          <IconButton onClick={() => setIsOpenDrawer(false)}>
            <CloseIcon
              style={{ color: theme === "dark" ? "white" : undefined }}
            />
          </IconButton>
        </div>

        <div
          className="flex flex-col h-full w-full"
          style={{
            padding: 30,
            backgroundColor: theme === "light" ? "#FFFFFF" : "#1E1F25",
          }}
        >
          <div className="flex items-center justify-between text-[var(--text-color)]">
            <h6 className="font-bold text-[23px]"> Today’s Scheudle </h6>
            <div
              className="bg-[#F4F4F4] rounded-2xl"
              style={{ padding: 10, color: "#768396" }}
            >
              <Dashboard />
              <CalendarMonthOutlined />
            </div>
          </div>

          <div
            className="flex items-center justify-between gap-2"
            style={{ marginTop: 20 }}
          >
            <div>
              <h6 className="text-[#1EA7FF]"> 30 minute call with Client </h6>
              <h6 className="text-[var(--text-color)] text-[21px]">
                {" "}
                Project Discovery Call{" "}
              </h6>
            </div>
            <h6 className="text-[#1EA7FF]"> + Invite </h6>
          </div>

          <div
            className="flex items-center justify-between bg-[#5E5BF8] text-[var(--text-color)] rounded-xl w-full gap-4"
            style={{ padding: 20, marginTop: 30 }}
          >
            <div className="flex -space-x-3">
              {callMembers.map((members, i) => {
                return (
                  <img
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src={members}
                    alt="avatar"
                  />
                );
              })}

              <div className="w-8 h-8 rounded-full bg-white text-[#5E5BF8] text-sm font-bold flex items-center justify-center border-2 border-white">
                R
              </div>
            </div>

            <div className="text-sm font-medium">28:35</div>

            <div className="flex items-center gap-3 text-[white]">
              <PhoneCallback />
              <MoreHoriz />
            </div>
          </div>

          <div className="w-full" style={{ marginTop: 30 }}>
            <h2
              style={{ marginBottom: 20 }}
              className="text-[#232360] font-bold text-[21px]"
            >
              Messages
            </h2>
            <div className="flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className={`rounded-full p-1 ${msg.bg}`}>
                    <img
                      src={msg.avatar}
                      alt={msg.name}
                      className="w-10 h-10 rounded-full border border-white"
                    />
                  </div>
                  <div className="flex flex-col text-[21px]">
                    <span className="text-[var(--text-color)] font-semibold leading-tight">
                      {msg.name}
                    </span>
                    <span className="text-[var(--text-color)] text-sm truncate max-w-[180px]">
                      {msg.message}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <NewTask />
          <Space height={50}/>
        </div>
      </Drawer>
    </div>
  );
};

export default Schedule;

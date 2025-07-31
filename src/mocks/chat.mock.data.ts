import member1 from "../assets/member.jpg";
import member2 from "../assets/member1.jpg";
import member3 from "../assets/member2.jpg";
import member4 from "../assets/member3.jpg";
import member5 from "../assets/member4.jpg";
import member6 from "../assets/memebr4.jpg";
import type { Message } from "./types";

export const GroupChats: Array<Message> = [
  {
    user: "me",
    message: "Hey everyone, are we still on for the 3 PM meeting?",
    sendedAt: "2025-07-31T09:00:00Z",
    avatar: "",
  },
  {
    user: "Alice",
    message: "Yes, I’ll be there. Got a few updates to share!",
    sendedAt: "2025-07-31T09:01:30Z",
    avatar: member1,
  },
  {
    user: "Bob",
    message: "Same here. Let’s keep it short though 😅",
    sendedAt: "2025-07-31T09:02:10Z",
    avatar: member2,
  },
  {
    user: "Charlie",
    message: "I might be a few minutes late, wrapping up another call.",
    sendedAt: "2025-07-31T09:03:25Z",
    avatar: member3,
  },
  {
    user: "Dana",
    message: "I'll share the slides before the meeting starts.",
    sendedAt: "2025-07-31T09:05:00Z",
    avatar: member4,
  },
  {
    user: "Eli",
    message: "Can someone please send me the agenda?",
    sendedAt: "2025-07-31T09:06:10Z",
    avatar: member5,
  },
  {
    user: "me",
    message: "Sure, sharing it now. Check the drive folder.",
    sendedAt: "2025-07-31T09:06:45Z",
    avatar: "",
  },
  {
    user: "Fiona",
    message: "Thanks! Also, let's align on the deadline for the new tasks.",
    sendedAt: "2025-07-31T09:07:20Z",
    avatar: member6,
  },
];

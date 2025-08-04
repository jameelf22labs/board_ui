export const EventNames = {
  SearchTitle: "event:search:title",
  OpenGroupChat: "open:group:chat",
  OpenTaskSchedule: "open:task:schedule",
} as const;

export type EventNameTypes = (typeof EventNames)[keyof typeof EventNames];

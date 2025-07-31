export const EventNames = {
  SearchTitle: "event:search:title",
  OpenGroupChat: "open:group:chat"
} as const;

export type EventNameTypes = (typeof EventNames)[keyof typeof EventNames];

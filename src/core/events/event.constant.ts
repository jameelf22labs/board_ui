export const EventNames = {
  SearchTitle: "event:search:title",
} as const;

export type EventNameTypes = (typeof EventNames)[keyof typeof EventNames];

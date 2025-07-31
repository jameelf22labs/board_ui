export type Task = {
  category: string;
  backgroundImage?: string;
  title: string;
  description: string;
  issueDate: string;
  members: string[];
};

export interface BoardTask {
  backlog: Array<Task>;
  todo: Array<Task>;
  progress: Array<Task>;
  complete: Array<Task>;
  review: Array<Task>;
}

export type Message = {
  user: string;
  message: string;
  sendedAt: string;
  avatar: string;
};

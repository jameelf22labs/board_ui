import type { BoardTask, Task } from "./types";

export type BoardStatus = keyof BoardTask;

export class KanbanMock {
  private static instance: KanbanMock;
  private constructor(private readonly mock: BoardTask) {}

  static getInstance(mockData: BoardTask): KanbanMock {
    if (!KanbanMock.instance) {
      KanbanMock.instance = new KanbanMock(mockData);
    }
    return KanbanMock.instance;
  }

  getAllStatus(): Promise<BoardStatus[]> {
    return Promise.resolve(Object.keys(this.mock) as BoardStatus[]);
  }

  get(status: BoardStatus): Promise<Task[]> {
    return Promise.resolve(this.mock[status]);
  }

  searchByTitle(query: string, status: BoardStatus): Promise<Task[]> {
    const results = this.mock[status].filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase())
    );
    return Promise.resolve(results);
  }
}

import type { BoardTask, Task } from "./types";

export type BoardStatus = keyof BoardTask;

export class KanbanMock {
  private mock: BoardTask;

  constructor(mock: BoardTask) {
    this.mock = mock;
  }

  async getAllStatus(): Promise<BoardStatus[]> {
    return Object.keys(this.mock) as BoardStatus[];
  }

  async get(status: BoardStatus): Promise<Task[]> {
    return this.mock[status];
  }

  async searchByTitle(
    query: string
  ): Promise<{ status: BoardStatus; task: Task }[]> {
    const results: { status: BoardStatus; task: Task }[] = [];

    for (const status of Object.keys(this.mock) as BoardStatus[]) {
      const tasks = this.mock[status];
      for (const task of tasks) {
        if (task.title.toLowerCase().includes(query.toLowerCase())) {
          results.push({ status, task });
        }
      }
    }

    return results;
  }
}

import { ChatMock } from "./chat.mock";
import { groupChats } from "./chat.mock.data";
import { KanbanMock } from "./kanban.mock";
import kanbanBoardMock from "./kanban.mock.data";

export class MockFactory {
  static createKanban() {
    return KanbanMock.getInstance(kanbanBoardMock);
  }

  static createChat() {
    return ChatMock.getInstance(groupChats);
  }
}

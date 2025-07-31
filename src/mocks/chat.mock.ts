import type { Message } from "./types";

export class ChatMock {
  private static instance: ChatMock;
  private constructor(private readonly message: Array<Message>) {}

  static getInstance(mockData: Array<Message>): ChatMock {
    if (!ChatMock.instance) {
      ChatMock.instance = new ChatMock(mockData);
    }
    return ChatMock.instance;
  }

  getAllChat() {
    return this.message;
  }

  addMessage(newMessage: Message) {
    this.message.push(newMessage);
  }
}

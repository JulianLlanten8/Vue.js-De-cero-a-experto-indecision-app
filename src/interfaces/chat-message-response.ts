export interface ChatMessage {
  id: string;
  message: string;
  isMine: boolean;
  image?: string;
}
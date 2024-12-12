import { sleep } from "@/helpers/sleep";
import type { ChatMessage } from "@/interfaces/chat-message-response";
import type { yesNoResponse } from "@/interfaces/yes-no-interface";
import { ref } from "vue";

export const useChat = () => {

  const messages = ref<ChatMessage[]>([]);

  const getResponse = async () => {
    const res = await fetch("https://yesno.wtf/api");
    const data = (await res.json()) as yesNoResponse;
    return data;
  }

  const onMessage = async (message: string) => {
    if (message.length === 0) return;

    messages.value.push({
      id: self.crypto.randomUUID(),
      message,
      isMine: true,
    });
    if (!message.endsWith("?")) return;

    await sleep();

    const { answer, image } = await getResponse();


    messages.value.push({
      id: self.crypto.randomUUID(),
      message: answer,
      isMine: false,
      image,
    });
  };

  return {
    //Properties
    messages,

    //Methods
    onMessage,
  };

}
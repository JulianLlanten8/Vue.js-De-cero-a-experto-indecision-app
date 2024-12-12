import { mount } from '@vue/test-utils';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message-response';

const messages: ChatMessage[] = [
  {
    id: self.crypto.randomUUID(),
    message: 'Hello',
    isMine: true,
  },
  {
    id: self.crypto.randomUUID(),
    message: 'puedo?',
    isMine: false,
    image: 'https://placekitten.com/150',
  }
];


describe('<ChatMessages />', () => {
  const wrapper = mount(ChatMessages, {
    props: {
      messages: messages
    }
  });
  test('renders messages chat correctly', () => {

    const ChatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
    expect(ChatBubbles.length).toBe(2);
  });


  test('scrolls down to the bottom after messages update', async () => {
    const scrollToMock = vi.fn();

    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    chatRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [...messages, { id: self.crypto.randomUUID(), message: 'Hola', isMine: true }]
    });

    await new Promise((r) => setTimeout(r, 150));

    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(scrollToMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      top: expect.any(Number),
    });
  });

});

import { mount } from "@vue/test-utils";
import IndecisionViews from "@/views/IndecisionView.vue";
import ChatMessages from "@/components/chat/ChatMessages.vue";
import MessageBox from "@/components/chat/MessageBox.vue";

const mockMessages = {
  template: '<div data-testid="chat-messages">Chat messages</div>'
}

describe('<IndecisionViews />', () => {
  test('renders chat messages and messagesbox correctly', () => {
    const wrapper = mount(IndecisionViews);

    expect(wrapper.html()).toMatchSnapshot();

    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true);

  });

  test('call onMessageSend when message is sent', async () => {
    const wrapper = mount(IndecisionViews, {
      global: {
        stubs: {
          ChatMessages: mockMessages
        }
      }
    });

    const messageBocComponent = wrapper.findComponent(MessageBox);
    messageBocComponent.vm.$emit('sendMessage', 'Hello');

    await new Promise((resolve) => setTimeout(resolve, 150));

    expect(wrapper.html()).toMatchSnapshot();

  });
});

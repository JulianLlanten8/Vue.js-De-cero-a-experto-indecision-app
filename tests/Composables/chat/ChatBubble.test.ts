import { mount } from "@vue/test-utils";
import ChatBubble from "@/components/chat/ChatBubble.vue";

describe('<ChatBubble />', () => {

  test('Renders own message  correctly', () => {

    const message = 'Hello World';
    const wrapper = mount(ChatBubble, {
      props: {
        message, isMine: true
      }
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();

  });

  test('Renders recieved message correctly', () => {

    const message = 'Hello World';
    const wrapper = mount(ChatBubble, {
      props: {
        message, isMine: false
      }
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);

    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('img').exists()).toBe(false);

  });

  test('Renders recieved message correctly ', () => {

    const message = 'Hello World';
    const wrapper = mount(ChatBubble, {
      props: {
        message, isMine: false, image: 'https://placekitten.com/150'
      }
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);

    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe('https://placekitten.com/150');

  });

});
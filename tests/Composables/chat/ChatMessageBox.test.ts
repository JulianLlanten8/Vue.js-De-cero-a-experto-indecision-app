import { mount } from "@vue/test-utils";
import MessageBox from "@/components/chat/MessageBox.vue";

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);
  test('reders input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('emits send event when button is clicked whith message value', async () => {
    const message = 'Hello World';

    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect((wrapper.vm as unknown as { message: string }).message).toBe('');
  });

  test('emits send event when keypress enter is trigger clicked whith message value', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input');

    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')).toBeFalsy();


  });

});
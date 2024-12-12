import { useChat } from "@/composables/useChat";


describe('useChat', async () => {
  test('add message corrwctly when onmessage is called', async () => {
    const test = 'test';
    const { messages, onMessage } = useChat(); +

      await onMessage(test);

    expect(messages.value.length).toBe(1);
    expect(messages.value[0].isMine).toBe(true);
    expect(messages.value[0].message).toBe(test);
    expect(messages.value[0]).toEqual({
      id: expect.any(String),
      message: test,
      isMine: true,
    });
  });

  test('add nothing if text is empty', async () => {
    const test = '';
    const { messages, onMessage } = useChat(); +

      await onMessage(test);

    expect(messages.value.length).toBe(0);
  });

  test('get her response correctly when message ends with ?', async () => {
    const test = 'Quieres salir conmigo?';
    const { messages, onMessage } = useChat();

    await onMessage(test);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const [message, herMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(herMessage.isMine).toBe(false);
    expect(herMessage).toEqual({
      id: expect.any(String),
      message: expect.any(String),
      isMine: false,
      image: expect.any(String),
    });

    expect(message).toEqual({
      id: expect.any(String),
      message: test,
      isMine: true,
    });
  });


  test('Mock response - fetch api ?', async () => {
    const mockResponse = {
      answer: 'yes',
      image: 'https://yesno.wtf/assets/yes/2.gif',
    };

    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));

    const test = 'Quieres salir conmigo?';
    const { messages, onMessage } = useChat();

    await onMessage(test);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const [, herMessage] = messages.value;

    expect(herMessage).toEqual({
      id: expect.any(String),
      message: mockResponse.answer,
      isMine: false,
      image: mockResponse.image,
    });

  });

});
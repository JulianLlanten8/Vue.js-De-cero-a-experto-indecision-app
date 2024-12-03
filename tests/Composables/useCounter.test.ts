import { useCounter } from "@/composables/useCounter";


describe('useCounter', () => {
  test('Inicialiced counter with provided initialValue', () => {
    const { counter, squareCounter } = useCounter(5);

    expect(counter.value).toBe(5);
    expect(squareCounter.value).toBe(25);
  });

  test('Inicialiced counter with provided initialValue', () => {
    const initialValue = 10;
    const { counter, squareCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('Increment counter correctly', () => {
    const { counter, squareCounter } = useCounter(5);

    counter.value++;
    expect(counter.value).toBe(6);
  });
});
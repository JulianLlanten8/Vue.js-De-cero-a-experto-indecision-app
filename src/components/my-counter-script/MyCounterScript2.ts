import { defineComponent } from 'vue'
import { useCounter } from '@/composables/useCounter';
export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  setup() {
    /*     const counter = ref(0)
        const squareCounter = computed(() => counter.value * counter.value) */
    const { counter, squareCounter } = useCounter();

    return {
      counter,
      squareCounter
    }
  }
});

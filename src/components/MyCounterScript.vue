<template>
  <section>
    <h3>
      counter con defineComponent : {{ counter }}
    </h3>

    <h3>
      Square : {{ squareCounter }}
    </h3>
    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';


export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  setup() {
    const { counter, squareCounter } = useCounter();
    return {
      counter,
      squareCounter
    }
  }
});
</script>
<style scoped>
h1 {
  color: green;
}
</style>
<template>
  <section>
    <h3>
      counter : {{ counter }}
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

<script lang="ts" src="./MyCounterScript2.ts"></script>
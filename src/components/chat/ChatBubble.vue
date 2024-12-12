<template>
  <div v-if="isMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      {{ message }}
    </div>
  </div>

  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span>{{ message }}</span>
      <img v-if="image" :src="image" alt="image" class="w-52 h-52 object-contain" />
    </div>
  </div>

</template>
<script setup lang="ts">
interface props {
  message: string;
  isMine: boolean;
  image?: string;
}

defineProps<props>();


</script>

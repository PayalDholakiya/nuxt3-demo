<template>
  <div class="flex items-center justify-between p-4 border rounded bg-white">
    <div>
      <h3 class="font-semibold">{{ item.title }}</h3>
      <p class="text-sm text-gray-500">Qty: {{ item.quantity }}</p>
    </div>
    <div class="flex items-center space-x-4">
      <span class="font-bold text-green-600">${{ item.price * item.quantity }}</span>
      <button @click="$emit('remove')" class="text-red-500 hover:underline">Remove</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object
})
defineEmits(['remove'])
</script>

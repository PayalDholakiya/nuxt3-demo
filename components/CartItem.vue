<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

defineEmits(['remove'])
</script>

<template>
  <div
    class="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition"
  >
    <div class="flex items-center space-x-4">
      <!-- Optional: Thumbnail -->
      <img
        :src="item.thumbnail || 'https://via.placeholder.com/60'"
        alt="Product Image"
        class="w-16 h-16 object-cover rounded"
      />
      <div>
        <h3 class="font-semibold text-gray-800 text-lg">{{ item.title }}</h3>
        <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
        <p class="text-sm text-gray-500">Unit Price: ${{ item.price }}</p>
      </div>
    </div>

    <div class="flex flex-col items-end space-y-2">
      <span class="text-green-600 font-bold text-lg">
        ${{ (item.price * item.quantity).toFixed(2) }}
      </span>
      <button
        @click="$emit('remove')"
        class="text-red-600 hover:text-red-800 hover:underline font-medium text-sm"
      >
        ❌ Remove
      </button>
    </div>
  </div>
</template>


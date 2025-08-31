<script setup>
const emit = defineEmits(['update:search', 'update:category'])

const search = ref('')
const category = ref('')

// Emit whenever search changes
watch(search, (val) => {
  emit('update:search', val)
})

// Emit whenever category changes
watch(category, (val) => {
  emit('update:category', val)
})

// Example categories – you can also pass them as a prop
const categories = ['beauty', 'furniture', 'fragrances']
</script>

<template>
  <div class="w-full flex justify-end my-6">
    <!-- Responsive container -->
    <div class="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
      
      <!-- Search Bar -->
      <div class="w-full">
        <input
          v-model="search"
          type="text"
          placeholder="🔍 Search products..."
          class="w-full p-3 pl-4 border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      <!-- Category Filter -->
      <div class="w-full">
        <select
          v-model="category"
          class="w-full p-3 border rounded-lg shadow-lg bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out"
        >
          <option value="">All Categories</option>
          <option 
            v-for="cat in categories" 
            :key="cat" 
            :value="cat"
            class="capitalize"
          >
            {{ cat.charAt(0).toUpperCase() + cat.slice(1) }}
          </option>
        </select>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Add any additional custom styling for icons or components */
</style>

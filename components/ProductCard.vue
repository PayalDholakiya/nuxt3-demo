<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  product: Object
})

const imageLoaded = ref(false)
const isAdding = ref(false)
const cart = useCartStore()
const toast = useToast()

// Function to check if the product is in the cart
function isProductInCart(product) {
  return cart.items.some(item => item.id === product.id)
}

async function handleAddToCart(product) {
  if (isAdding.value || isProductInCart(product)) return

  isAdding.value = true
  // Optional: simulate delay for visual feedback
  await new Promise(resolve => setTimeout(resolve, 400))

  cart.addToCart(product)
  toast.success(`${product.title} added to cart!`)

  isAdding.value = false
}
</script>

<template>
  <div
    class="border rounded-lg shadow-md hover:shadow-lg p-4 bg-white flex flex-col transition-all duration-300 transform hover:scale-105">
    <!-- Image container with fixed height and background -->
    <div class="relative w-full min-h-48 bg-gray-100 rounded overflow-hidden">
  <img
        :src="product.thumbnail"
        :alt="product.title"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        :class="{ 'opacity-0': !imageLoaded, 'opacity-100': imageLoaded }"
        loading="lazy"
        @load="imageLoaded = true"
      />

      <!-- Skeleton Placeholder (only visible before image load) -->
      <div v-if="!imageLoaded" class="w-full h-full bg-gray-200 animate-pulse"></div>
    </div>

    <!-- Product info -->
    <h3 class="font-semibold text-md mt-4 text-gray-800">{{ product.title }}</h3>
    <p class="text-sm text-gray-600 line-clamp-3">{{ product.description }}</p>

    <div class="mt-auto flex justify-between items-center pt-5">
      <span class="font-bold text-green-600">${{ product.price.toFixed(2) }}</span>

      <!-- Conditional Button -->
      <button @click="isProductInCart(product) ? $router.push('/cart') : handleAddToCart(product)" :disabled="isAdding"
        :class="[
          isProductInCart(product) ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700',
          'text-white px-4 py-2 rounded-md transition duration-200 ease-in-out focus:outline-none disabled:opacity-50'
        ]">
        <div class="flex items-center gap-x-2">
          <div v-if="isAdding" class="w-4 h-4 border-t-2 border-white border-solid rounded-full animate-spin"></div>
          <span>{{ isProductInCart(product) ? 'Go to Cart' : (isAdding ? 'Adding...' : 'Add to Cart') }}</span>
        </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind's group class will handle hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
</style>

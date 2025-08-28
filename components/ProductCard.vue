<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  product: Object
})

const imageLoaded = ref(false)
const isAdding = ref(false)
const cart = useCartStore()
const toast = useToast()

const product = computed(() => props.product)


async function handleAddToCart(product) {
  if (isAdding.value) return

  isAdding.value = true

  // Optional: simulate delay for visual feedback
  await new Promise(resolve => setTimeout(resolve, 400))

  cart.addToCart(product)
  toast.success(`${product.title} added to cart!`)

  isAdding.value = false
}
</script>

<template>
  <div class="border rounded-lg shadow-md p-4 bg-white flex flex-col">
    <!-- Image container with fixed height and background -->
    <div class="relative w-full min-h-48 bg-gray-100 rounded overflow-hidden">
      <img
        v-show="imageLoaded"
        :src="product.thumbnail"
        :alt="product.title"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        loading="lazy"
        @load="imageLoaded = true"
    />
      <!-- Skeleton Placeholder -->
      <div
        v-if="!imageLoaded"
        class="w-full h-full bg-gray-200 animate-pulse"
      ></div>
    </div>

    <!-- Product info -->
    <h3 class="font-semibold text-md mt-4">{{ product.title }}</h3>
    <p class="text-sm text-gray-600 line-clamp-3">{{ product.description }}</p>

    <div class="mt-auto flex justify-between items-center pt-5">
      <span class="font-bold text-green-600">${{ product.price }}</span>
      <button
        @click="handleAddToCart(product)"
        :disabled="isAdding"
        class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition cursor-pointer"
      >
      <div class="flex items-center gap-x-3">
        <Loader v-if="isAdding" />
        <span >Add to Cart</span>
      </div>
      </button>
    </div>
  </div>
</template>


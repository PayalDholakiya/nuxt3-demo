<template>
  <div class="border rounded-lg shadow-md p-4 bg-white flex flex-col">
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="w-full h-48 object-cover rounded mb-4"
      loading="lazy"
    />
    <h3 class="font-semibold text-lg">{{ product.title }}</h3>
    <p class="text-sm text-gray-600">{{ product.description }}</p>
    <div class="mt-auto flex justify-between items-center mt-4">
      <span class="font-bold text-green-600">${{ product.price }}</span>
      <button
        @click="cart.addToCart(product)"
        class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object
})
import { useCartStore } from '../stores/cart'
const cart = useCartStore()


function handleAddToCart() {
  cart.addToCart(props.product)
  toast.success(`${props.product.title} added to cart!`)
}
</script>

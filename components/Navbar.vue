<template>
  <nav class="flex justify-between items-center p-4 bg-white shadow-md">
    <NuxtLink to="/" class="text-xl font-bold text-gray-800">Nuxt Shop</NuxtLink>
    <NuxtLink to="/cart" class="text-blue-600 hover:underline">
      🛒 Cart ({{ cart.totalItems }})
    </NuxtLink>
  </nav>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
const cart = useCartStore()
</script>

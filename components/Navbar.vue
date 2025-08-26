<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <nav class="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-2xl font-extrabold text-blue-600">Demo Project</NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center">
          <NuxtLink to="/" class="text-gray-700 hover:text-blue-600 font-medium">Home</NuxtLink>
          <NuxtLink to="/cart" class="relative text-gray-700 hover:text-blue-600 font-medium">
            🛒
            <span
              v-if="cart.items.length > 0"
              class="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full"
            >
              {{ cart.items.length }}
            </span>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="menuOpen" class="md:hidden bg-white shadow-md">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink to="/" class="block text-gray-700 hover:text-blue-600 font-medium">Home</NuxtLink>
        <NuxtLink to="/cart" class="block text-gray-700 hover:text-blue-600 font-medium">
          🛒 Cart ({{ cart.totalItems }})
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>


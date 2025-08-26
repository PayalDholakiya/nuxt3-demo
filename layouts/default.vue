<template>
  <div>
    <Navbar />
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

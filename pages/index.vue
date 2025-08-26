<template>
  <div class="pt-14">
    <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCardPlaceholder v-for="n in 8" :key="'placeholder-' + n" />
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-14">
      <ProductList :products="products"  />
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
import ProductList from '@/components/ProductList.vue'
import { useProducts } from '@/composables/useProducts'

const toast = useToast()

const { data: products, pending, error } = useProducts()

if (error.value) {
  toast.error(`Failed to load products: ${error.value}`)
}
</script>

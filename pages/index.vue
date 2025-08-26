<template>
  <div>
    <h2 class="text-2xl font-semibold mb-6">Products</h2>
    <ProductList :products="products" />
  </div>
</template>

<script setup>
import ProductList from '@/components/ProductList.vue'
import { useProducts } from '@/composables/useProducts'

const { data: products, error } = await useProducts()

if (error.value) {
  throw createError({ statusCode: 500, message: 'Failed to load products' })
}
</script>

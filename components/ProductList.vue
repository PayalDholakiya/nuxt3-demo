<script setup>
import ProductCard from './ProductCard.vue'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const products = computed(() => props.products)

</script>

<template>
<div
    v-for="product in products"
    :key="product.id"
    class="transition-transform duration-300 ease-in-out transform hover:scale-105"
  >
    <ProductCard :product="product" />
  </div>
</template>

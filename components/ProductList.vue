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
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
</template>


<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Your Cart</h2>
    <div v-if="cart.items.length === 0" class="text-gray-500">Cart is empty.</div>
    <div v-else class="space-y-4">
      <CartItem
        v-for="item in cart.items"
        :key="item.id"
        :item="item"
        @remove="cart.removeFromCart(item.id)"
      />
      <div class="text-right font-semibold text-xl mt-4">
        Total: ${{ cart.totalPrice }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import CartItem from '@/components/CartItem.vue'

const cart = useCartStore()
</script>

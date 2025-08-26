<script setup>
import { defineAsyncComponent } from 'vue'
import CartIcon from '@/components/icons/CartIcon.vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const CartItem = defineAsyncComponent(() =>
import('@/components/CartItem.vue')
)

const toast = useToast()
const cart = useCartStore()
const router = useRouter()
const isRemoving = ref(false)

function goToShop() {
  router.push('/') // Replace with your actual shop route
}

 async function handleRemove(id, title) {
   isRemoving.value = true
   await cart.removeFromCart(id)
  toast.info(`${title} removed from cart`)
  isRemoving.value = false
}

</script>

<template>
  <div class="py-16">
    <h2 class="text-3xl font-bold mb-8 text-center mt-5">Your Cart</h2>

    <div v-if="cart.items.length === 0" class="text-center text-gray-600 flex flex-col items-center space-y-4">
      <CartIcon />

      <p class="text-xl font-medium">Your cart is currently empty.</p>
      <p class="text-gray-500">Looks like you haven’t added anything to your cart yet.</p>

      <button
        @click="goToShop"
        :disabled="isRemoving"
        class="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        <div class="flex items-center gap-x-3">
          <Loader v-if="isRemoving" />
          <span >Continue Shopping</span>
        </div>
      
      </button>
    </div>

    <div v-else class="space-y-4">
    <ClientOnly>
      <CartItem
        v-for="item in cart.items"
        :key="item.id"
        :item="item"
        @remove="handleRemove(item.id, item.title)"
      />
    </ClientOnly>
      <div class="text-right font-semibold text-xl mt-4">
        Total: ${{ cart.totalPrice }}
      </div>
    </div>
  </div>
</template>

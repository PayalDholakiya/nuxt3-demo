<script setup>
import { useToast } from 'vue-toastification'

const toast = useToast()

const { data: products, pending, error } = useProducts({limit:20})

// 🔹 State for filters
const searchQuery = ref('')
const selectedCategory = ref('')

// 🔹 Filter logic
const filteredProducts = computed(() => {
  if (!products.value) return []
  return products.value.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())

    const matchesCategory =
      !selectedCategory.value || product.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})

if (error.value) {
  toast.error(`Failed to load products: ${error.value}`)
}
</script>

<template>
  <div class="pt-14">
    <ClientOnly>
      <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-14">
        <ProductCardPlaceholder v-for="n in 8" :key="'placeholder-' + n" />
      </div>

      <div v-else>
        <!-- 🔹 Search & Filter Component -->
        <ProductFilter
          @update:search="searchQuery = $event"
          @update:category="selectedCategory = $event"
        />

        <!-- 🔹 Product List -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          <ProductList :products="filteredProducts" />
        </div>
      </div>

      <template #fallback>
        <div class="flex items-center justify-center mt-16">
          <h1>Loading Content...</h1>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

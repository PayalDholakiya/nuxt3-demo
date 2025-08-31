<script setup>
import { useToast } from 'vue-toastification'

const toast = useToast()

const { data: products, pending, error } = useProducts({ limit: 20 })

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
        <div v-if="filteredProducts.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          <ProductList :products="filteredProducts" />
        </div>

        <!-- 🔹 No Products Message -->
        <div v-else class="flex flex-col items-center justify-center text-center mt-16 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2a4 4 0 014-4h3m0 0a4 4 0 00-4-4h-1a4 4 0 00-4 4v4a4 4 0 004 4h4a4 4 0 004-4v-2a4 4 0 00-4-4h-1" />
          </svg>
          <h2 class="text-xl font-semibold">No Products Found</h2>
          <p class="mt-2 text-sm">Try adjusting your search or filter criteria.</p>
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


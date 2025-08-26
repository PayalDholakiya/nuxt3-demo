export function useProducts() {
  return useAsyncData('products', async () => {
    const res = await $fetch('https://dummyjson.com/products?limit=20')
    return res.products
  }, {
    server: true,
    lazy: false,
    default: () => [],
  })
}

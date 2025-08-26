export function useProducts() {
  return useAsyncData('products', async () => {
    const res: any = await $fetch('https://dummyjson.com/products?limit=20')
    return res.products
  }, {
    server: false,   // 👈 force client-side fetch
    lazy: false,
    default: () => [],
  })
}

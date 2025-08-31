export function useProducts(payload: any) {
  return useAsyncData('products', async () => {
    const res: any = await $fetch('/api/products', { query: payload })
    return res 
  }, {
    server: true,
    lazy: false,
    default: () => [],
  })
}

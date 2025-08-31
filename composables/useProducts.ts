export function useProducts(payload: any) {
  return useAsyncData('products', async () => {
    const res: any = await $fetch('https://dummyjson.com/products', {
      params: payload   // wrap in params
    })
    return res.products
  }, {
    server: false,   // client-side fetch
    lazy: false,
    default: () => [],
  })
}

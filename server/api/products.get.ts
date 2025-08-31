export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const limit = Number(query.limit) || 20

    // fetch from external API
    const data: any = await $fetch('https://dummyjson.com/products', {
      query: { limit }
    })
    return data.products
  } catch (err: any) {
    console.error('API error:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch products'
    })
  }
})

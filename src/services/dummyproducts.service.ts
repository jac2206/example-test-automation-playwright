import { APIRequestContext } from '@playwright/test'

/**
 * Service para obtener productos desdem la API de Dummy Products
 */
export async function getAllProducts(
  request: APIRequestContext
) {

  return await request.get('https://dummyjson.com/products', {
    
  })
}

/**
 * Service para obtener productos x id desdem la API de Dummy Products
 */
export async function getProductById(
  request: APIRequestContext,
  id: number
) {

  return await request.get(`https://dummyjson.com/products/${id}`, {
    
  })
}

/**
 * Service para crear productos desdem la API de Dummy Products
 */
export async function createProduct(
  request: APIRequestContext,
  data: any
) {

  return await request.post(`https://dummyjson.com/products/add`, {
    data
  })
}

/**
 * Service para actualizar productos x id desdem la API de Dummy Products
 */
export async function updateProductById(
  request: APIRequestContext,
  id: number,
  data: any
) {

  return await request.patch(`https://dummyjson.com/products/${id}`, {
    data
  })
}

/**
 * Service para eliminar productos x id desdem la API de Dummy Products
 */
export async function deleteProductById(
  request: APIRequestContext,
  id: number,
) {

  return await request.delete(`https://dummyjson.com/products/${id}`, {
    
  })
}
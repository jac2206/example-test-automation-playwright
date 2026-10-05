import { APIRequestContext } from '@playwright/test'

/**
 * Service para obtener publicaciones
 */
export async function getAllPosts(
  request: APIRequestContext
) {

  return await request.get('https://jsonplaceholder.typicode.com/posts', {
    
  })
}

/**
 * Service para obtener publicaciones x id
 */
export async function getPostById(
  request: APIRequestContext,
  id: number
) {

  return await request.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    
  })
}

/**
 * Service para crear publicaciones
 */
export async function createPost(
  request: APIRequestContext,
  data: any
) {

  return await request.post(`https://jsonplaceholder.typicode.com/posts`, {
    data
  })
}

/**
 * Service para actualizar publicaciones
 */
export async function updatePost(
  request: APIRequestContext,
  id: number,
  data: any
) {

  return await request.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    data
  })
}

/**
 * Service para eliminar publicaciones
 */
export async function deletePost(
  request: APIRequestContext,
  id: number
) {

  return await request.delete(`https://jsonplaceholder.typicode.com/posts/${id}`, {

  })
}
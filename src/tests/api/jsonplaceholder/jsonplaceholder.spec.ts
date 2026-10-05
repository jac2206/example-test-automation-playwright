import test, { APIResponse, expect } from "@playwright/test"
import { createPost, deletePost, getAllPosts, getPostById, updatePost } from "../../../services/jsonplaceholder.service"
import { validPostCreate } from "../../../data/jsonplaceholder"

/**
 * Agrupa todos los tests jsonplaceholder API
 */
test.describe('JsonPlaceholder API', () => {

  /**
   * Caso de prueba:
   * Obtener todos los posts
   */
  test('should get all posts', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to get all posts', async () => {

      response = await getAllPosts(
        request,
      )

      console.log("URL:", response.url())
      console.log("STATUS:", response.status())
      console.log("BODY:", await response.text())

    })

    await test.step('Validate HTTP status code', async () => {

      expect(response.status()).toBe(200)

    })

    await test.step('Validate response structure', async () => {

      body = await response.json()

      console.log("Response body:", body)

      /**
       * Validamos
       */
      expect(Array.isArray(body)).toBe(true)
      expect(body[0].userId).toBe(1)
      expect(body[0].id).toBe(1)
      expect(body[0].title).toBeDefined()
      expect(body[0].title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
      expect(body[0].body).toBeDefined()
          
    })
  })
   /**
   * Caso de prueba:
   * Obtener post x id
   */
  test('should get post by id', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to get post by id', async () => {

      response = await getPostById(
        request,
        2
      )

      console.log("URL:", response.url())
      console.log("STATUS:", response.status())
      console.log("BODY:", await response.text())

    })

    await test.step('Validate HTTP status code', async () => {

      expect(response.status()).toBe(200)

    })

    await test.step('Validate response structure', async () => {

      body = await response.json()

      console.log("Response body:", body)

      /**
       * Validamos
       */
      expect(body.userId).toBe(1)
      expect(body.id).toBe(2)
      expect(body.title).toBeDefined()
      expect(body.title).toBe('qui est esse')
      expect(body.body).toBeDefined()
      expect(body.body).toContain('est rerum tempore vitae\nsequi sint nihil')
    })
  })
     /**
   * Caso de prueba:
   * Obtener post que no existe
   */
  test('should get post by id not existing', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to get post by id not existing', async () => {

      response = await getPostById(
        request,
        10000
      )

      console.log("URL:", response.url())
      console.log("STATUS:", response.status())
      console.log("BODY:", await response.text())

    })

    await test.step('Validate HTTP status code', async () => {

      expect(response.status()).toBe(404)

    })

    await test.step('Validate response structure', async () => {

      body = await response.json()

      console.log("Response body:", body)

      /**
       * Validamos
       */
      expect(body).toEqual({})
    })
  })
   /**
   * Caso de prueba:
   * Crear post con datos válidos
   */
  test('should create post with valid data', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to create post', async () => {

      response = await createPost(
        request,
        validPostCreate
      )

      console.log("URL:", response.url())
      console.log("STATUS:", response.status())
      console.log("BODY:", await response.text())

    })

    await test.step('Validate HTTP status code', async () => {

      expect(response.status()).toBe(201)

    })

    await test.step('Validate response structure', async () => {

      body = await response.json()

      console.log("Response body:", body)

      /**
       * Validamos
       */
      expect(body.title).toBe('Test')
      expect(body.body).toBe('Test')
      expect(body.userId).toBe(1212)
      expect(body.id).toBeDefined()
      expect(body.id).toBeGreaterThan(0)
    })
  })
     /**
   * Caso de prueba:
   * Actualizar post con datos válidos
   */
  test('should update post with valid data', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to update post', async () => {

      response = await updatePost(
        request,
        1,
        {title: validPostCreate.title}
      )

      console.log("URL:", response.url())
      console.log("STATUS:", response.status())
      console.log("BODY:", await response.text())

    })

    await test.step('Validate HTTP status code', async () => {

      expect(response.status()).toBe(200)

    })

    await test.step('Validate response structure', async () => {

      body = await response.json()

      console.log("Response body:", body)

      /**
       * Validamos
       */
      expect(body.title).toBe('Test')
      expect(body.body).toContain('quia et suscipit\nsuscipit recusandae')
      expect(body.userId).toBe(1)
      expect(body.id).toBeDefined()
      expect(body.id).toBeGreaterThan(0)
    })
  })
       /**
   * Caso de prueba:
   * Eliminar post con datos válidos
   */
  test('should delete post with valid data', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to delete post', async () => {

      response = await deletePost(
        request,
        1
      )

      console.log("URL:", response.url())
      console.log("STATUS:", response.status())
      console.log("BODY:", await response.text())

    })

    await test.step('Validate HTTP status code', async () => {

      expect(response.status()).toBe(200)

    })

    await test.step('Validate response structure', async () => {

      body = await response.json()

      console.log("Response body:", body)

      /**
       * Validamos
       */
      expect(body).toEqual({})
    })
  })
})
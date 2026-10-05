import test, { APIResponse, expect } from "@playwright/test"
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../../../services/dummyproducts.service"
import { updatedProduct, validProduct } from "../../../data/dummyproducts"



/**
 * Agrupa todos los tests productos de prueba de la API Dummy Products
 */
test.describe('Dummy Products API', () => {

  /**
   * Caso de prueba:
   * Obtener todos los productos
   */
  test('should get all products', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to get all products', async () => {

      response = await getAllProducts(
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
      expect(Array.isArray(body.products)).toBe(true)
      expect(body.products[0].id).toBe(1)
      expect(body.products[0].title).toBeDefined()
      expect(body.products[0].title).toBe('Essence Mascara Lash Princess')
      expect(body.products[0].description).toBeDefined()
      expect(body.products[0].price).toBeDefined()
      expect(body.products[0].price).toBeGreaterThan(0)
      expect(body.products[0].discountPercentage).toBeDefined()
      expect(body.products[0].discountPercentage).toBe(10.48)
      expect(body.products[0].rating).toBeDefined()
      expect(body.products[0].stock).toBeDefined()
      expect(body.products[0].stock).toBeGreaterThan(0)
      expect(body.products[0].brand).toBeDefined()
      expect(body.products[0].category).toBeDefined()
      expect(body.products[0].sku).toBeDefined()
    })
  })
    /**
   * Caso de prueba:
   * Obtener productos x id
   */
  test('should get product by id', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to get product by id', async () => {

      response = await getProductById(
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
      expect(body.id).toBe(1)
      expect(body.title).toBeDefined()
      expect(body.title).toBe('Essence Mascara Lash Princess')
      expect(body.description).toBeDefined()
      expect(body.price).toBeDefined()
      expect(body.price).toBeGreaterThan(0)
      expect(body.discountPercentage).toBeDefined()
      expect(body.discountPercentage).toBe(10.48)
      expect(body.rating).toBeDefined()
      expect(body.stock).toBeDefined()
      expect(body.stock).toBeGreaterThan(0)
      expect(body.brand).toBeDefined()
      expect(body.category).toBeDefined()
      expect(body.sku).toBeDefined()
    })
  })
      /**
   * Caso de prueba:
   * Obtener productos x id no existente
   */
  test('should get product by id not found', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to get product by id not found', async () => {

      response = await getProductById(
        request,
        99999
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
      expect(body.message).toContain('Product with id')
      expect(body.message).toContain('not found')
    })
  })
    /**
   * Caso de prueba:
   * Crear producto
   */
  test('should create product', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to create product', async () => {

      response = await createProduct(
        request,
        validProduct
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
      expect(body.id).toBe(195)
      expect(body.title).toBeDefined()
      expect(body.title).toBe('Cadena One piece')
      expect(body.price).toBeDefined()
      expect(body.price).toBeGreaterThan(0)
      expect(body.discountPercentage).toBeDefined()
      expect(body.discountPercentage).toBe(10.48)
      expect(body.rating).toBeDefined()
      expect(body.stock).toBeDefined()
      expect(body.stock).toBeGreaterThan(0)
      expect(body.brand).toBeDefined()
      expect(body.category).toBeDefined()
    })
  }) 
      /**
   * Caso de prueba:
   * Actualizar producto
   */
  test('should update product', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to update product', async () => {

      response = await updateProductById(
        request,
        1,
        updatedProduct
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
      expect(body.id).toBe(1)
      expect(body.title).toBeDefined()
      expect(body.title).toBe('Cadena One piece')
      expect(body.description).toBeDefined()
      expect(body.description).toBe('Cadena plata sombrero de paja')
      expect(body.price).toBeDefined()
      expect(body.price).toBe(100)
      expect(body.stock).toBeDefined()
      expect(body.stock).toBe(5)
      expect(body.brand).toBeDefined()
      expect(body.category).toBeDefined()
      expect(body.category).toBe('Anime')
    })
  }) 
        /**
   * Caso de prueba:
   * Actualizar producto no encontrado
   */
  test('should update product not found', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to update product not found', async () => {

      response = await updateProductById(
        request,
        10000,
        updatedProduct
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
      expect(body.message).toContain('Product with id')
      expect(body.message).toContain('not found')
    })
  }) 
   /**
   * Caso de prueba:
   * Eliminar producto
   */
  test('should delete product', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to delete product', async () => {

      response = await deleteProductById(
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
      expect(body.id).toBe(1)
      expect(body.title).toBeDefined()
      expect(body.title).toBe('Essence Mascara Lash Princess')
      expect(body.isDeleted).toBeDefined()
      expect(body.isDeleted).toBe(true)
      expect(body.deletedOn).toBeDefined()
    })
  })
     /**
   * Caso de prueba:
   * Eliminar producto no encontrado
   */
  test('should delete product not found', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to delete product not found', async () => {

      response = await deleteProductById(
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
      expect(body.message).toContain('Product with id')
      expect(body.message).toContain('not found')
    })
  })
})
import test, { APIResponse, expect } from "@playwright/test"
import { getPokeInfo, getPokeSpeciesInfo } from "../../../services/pokeapi.service"


/**
 * Agrupa todos los tests pokeApi
 */
test.describe('PokeAPI', () => {

  /**
   * Caso de prueba:
   * Obtener información de un pokemon válido
   */
  test('should get information for a valid pokemon', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to get pokemon information', async () => {

      response = await getPokeInfo(
        request,
        'pikachu'
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
      expect(body.id).toBe(25)
      expect(body.name).toBe('pikachu')
      expect(body.types[0].type.name).toBe('electric')
      expect(Array.isArray(body.abilities)).toBe(true)
          
    })
  })
    /**
   * Caso de prueba:
   * Obtener información de un pokemon no válido
   */
  test('should get information for an invalid pokemon', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to get pokemon information', async () => {

      response = await getPokeInfo(
        request,
        'julian'
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
      expect(body.status).toBe(404)
      expect(body.message).toBe('Not Found')
          
    })
  })
    /**
   * Caso de prueba:
   * Obtener información del pokemon por especie
   */
  test('should get information for a valid pokemon species', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to get pokemon information', async () => {

      response = await getPokeSpeciesInfo(
        request,
        'pikachu'
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
      expect(body.id).toBe(25)
      expect(body.name).toBe('pikachu')
      expect(body.order).toBe(26)
      expect(body.is_baby).toBe(false)
      expect(body.is_legendary).toBe(false)
      expect(body.is_mythical).toBe(false)
      expect(body.pokedex_numbers[0].entry_number).toBe(25)
      expect(Array.isArray(body.pokedex_numbers)).toBe(true)
          
    })
  })
  /**
   * Caso de prueba:
   * Obtener información de especia un pokemon no válido
   */
  test('should get information for an invalid pokemon species', async ({ request}) => {

    let response: APIResponse
    let body

    await test.step('Send request to get pokemon information', async () => {

      response = await getPokeSpeciesInfo(
        request,
        'julian'
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
      expect(body.status).toBe(404)
      expect(body.message).toBe('Not Found')
          
    })
  })
})
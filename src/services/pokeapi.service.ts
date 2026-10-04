import { APIRequestContext } from '@playwright/test'

/**
 * Service para obtener pokemon desde la API de PokeAPI
 */
export async function getPokeInfo(
  request: APIRequestContext,
  name: string
) {

  return await request.get(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    
  })
}

export async function getPokeSpeciesInfo(
  request: APIRequestContext,
  name: string
) {

  return await request.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`, {
    
  })
}
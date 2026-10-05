/**
 * Datos de prueba reutilizables para los tests.
 *
 * Ventaja:
 * No repetimos datos dentro de cada test.
 * Si cambian los datos solo modificamos este archivo.
 */

/**
 * producto valido
 */
export const validProduct = {
    title: "Cadena One piece",
    description: "Cadena plata sombrero de paja",
    category: "beauty",
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    tags: [
        "beauty",
        "mascara"
    ],
    brand: "Essence",
    sku: "BEA-ESS-ESS-002"
}

/**
 * producto actualizado
 */
export const updatedProduct = {
    title: "Cadena One piece",
    description: "Cadena plata sombrero de paja",
    category: "Anime",
    price: 100,
    stock: 5
}




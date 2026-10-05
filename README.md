# Playwright Test Automation

Proyecto de automatización de pruebas funcionales y de API construido con **Playwright** y **TypeScript**.

## Tecnologías

- Node.js
- TypeScript
- Playwright Test
- APIs públicas para pruebas

## Estructura del proyecto

```text
src/
├── data/                 # Datos utilizados en las pruebas
├── services/             # Métodos para consumir las APIs
└── tests/
    ├── api/
    │   ├── dummyproducts/ # Pruebas de DummyJSON Products
    │   ├── jsonplaceholder/ # Pruebas de JSONPlaceholder
    │   └── pokemon/       # Pruebas de PokeAPI
    └── ui/                # Pruebas de interfaz de usuario

playwright.config.ts      # Configuración global de Playwright
```

Los servicios separan las llamadas HTTP de los casos de prueba, haciendo que las pruebas sean más claras y fáciles de mantener.

## Instalación

Requisitos:

- Node.js instalado
- npm instalado

Instalar las dependencias:

```bash
npm install
```

Si es la primera vez que se ejecuta Playwright, instalar los navegadores:

```bash
npx playwright install
```

## Ejecución de pruebas

Ejecutar todas las pruebas:

```bash
npm test
```

Ejecutar las pruebas en modo interfaz:

```bash
npm run test:ui
```

Ejecutar las pruebas mostrando el navegador:

```bash
npm run test:headed
```

Ejecutar un archivo específico:

```bash
npx playwright test src/tests/api/dummyproducts/dummyproducts.spec.ts
```

Ejecutar solamente las pruebas de API:

```bash
npx playwright test src/tests/api
```

## Reporte de pruebas

Después de ejecutar las pruebas, abrir el reporte HTML con:

```bash
npm run report
```

Cuando una prueba falla, Playwright conserva la captura de pantalla y el trace configurados en `playwright.config.ts` para facilitar el análisis del error.

## APIs utilizadas

- [PokeAPI](https://pokeapi.co/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [DummyJSON](https://dummyjson.com/)

Las pruebas cubren casos exitosos y escenarios de error, como recursos inexistentes, validando códigos HTTP y la estructura de las respuestas.

## Flujo recomendado

1. Crear o actualizar el método de consumo en `src/services/`.
2. Definir los datos de prueba en `src/data/` cuando sea necesario.
3. Implementar los casos en `src/tests/`.
4. Ejecutar las pruebas y revisar el reporte.


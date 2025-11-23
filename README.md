# EVALUACIÓN DIAGNÓSTICA

## Requisitos para ejecutar los archivos
- Node.js
- npm
- TypeScript (`tsc`) y ts-node

---

## Instalación

```bash
npm install
```
---

## Ejecución
Se pueden ejecutar los scripts directamente con ts-node:
```bash
npx ts-node src/ahorcado.ts
npx ts-node src/calculoEdadExacta.ts
npx ts-node src/crudUsuario.ts
npx ts-node src/fibonacci.ts
npx ts-node src/generarContrasena.ts
npx ts-node src/palindromo.ts
```

O compilando a JavaScript

```bash
npx tsc
node dist/ahorcado.js
node dist/calculoEdadExacta.js
node dist/crudUsuario.js
node dist/fibonacci.js
node dist/generarContrasena.js
node dist/palindromo.js
```
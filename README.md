# Ember Kata

## Comandos de utilidad
- `ember generate route <ruta>`
- `ember destroy route <ruta>`
- `ember generate component <componente>`

## Ember Stylus
Para añadirlo al proyecto actual
- `npm install --save-dev ember-cli-stylus`

Para añadir nib
- `npm install --save nib`
Añadir configuración de Stylus al fichero ember-cli-build
```
stylusOptions: {
  use: [nib()]
}
```

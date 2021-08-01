# Dialogs

## Tabla de contenidos

* [ImagePicker](#imagepicker)

### ImagePicker

**Descripción**:
  Dialogo de despliega un modal donde se puede recortar la imagen
  proveida en los argumentos.

* **Entradas**:
  * `data`: `ImageSquareCropper`.

* **Salidas**

Objeto con los siguiente atributos:

* `image`: `blob`. La imagen recortada.
* `imageTrustedUrl`: `string`. Una representación en base64 de la imagen
recortada. Sanitizada con las herramientas de angular.

* **Selector**: `app-image-picker`.

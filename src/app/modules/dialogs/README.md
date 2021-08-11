# Dialogs

## Tabla de contenidos

* [GroupPreferences](#grouppreferences)
* [ImagePicker](#imagepicker)

### GroupPreferences

**Descripción**:
  Dialogo que despliega diferentes formularios para configurar
  un grupo a nivel de miembro.

* **Entradas**
  * `data`: `GroupPreferences`

* **Salidas**

Objeto con los siguientes campos

  * `action`: `string`. Sus valores pueden ser: ["cancel" | "save-preferences" | "leave-group"]
  * `data`: `GroupPreferences`

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

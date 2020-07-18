# App Components Module

Este módulo contiene todos los componentes que no son vistas en la aplicación, componentes generales que pueden ser 
reutilizados en varias secciones de la app. Cualquier compoenente que no sea una vista debe ser registrado
en este módulo.

Todos los componentes agregados deben ser documentados en profundidad para que puedan ser usados por otros programadores.

Los datos que se deben incluir en la documentación de cada componente son:

* Nombre del compoenente (como título 3).
* Descripción (como es, qué hace, para qué sirve).
* Entradas. Descripción de ellas y sus tipos.
* Salidas. Descripción de ellas y sus tipos.
* Selector.
* Un enlace a su documentación debe ser agregado al índice.

## Documentación de componentes.

### Índice.
* [Single-Field Form n2options](#Single-field-Form-n2options)
* [ElementCard](#ElementCard)
* [ElementCardBox](#ElementCardBox)

### Single-Field Form n2options.

**Descripción**: Pequeño recuadro centrado responsivo de 400px de ancho con un único campo de entrada de texto (modificable: text, password, email, etc)
y dos botones (izquierdo y derecho) que que sirven para preguntar algo al usuario.

**Entradas**:
* `label`: La etiqueta del input. String.
* `placeholder`: El placeholder del input. String.
* `left-btn`: Leyenda del botón izquierdo. String.
* `right-btn`: leyenda del botón derecho. String.
* `type`: Tipo de la entrada de texto. String.
* `required`: Booleano indicando si es requerido.
* `forward-btn`: El botón que se considera el de avanzar (`left`|`right`). String.
* `error-msg`: El mensaje de error que se desplegará cuando `required` = `true` y el campo esté vacío.

**Salidas**:
* `btn-pressed`: Evento que retorna un objeto indicando el valor en el campo de texto al momento de ser presionado y el botón presionado. Si se presiona la tecla de retorno en el campo de texto en lugar de uno de los botones, se indicará en el campo `btn`.
  * `value`: el valor en el campo de texto.
  * `btn`: El botón presionado (`left`|`right`|`return`)

**Selector**: `app-single-field-form-n2options`

### ElementCard

**Descripción**: Se encarga de imprimir una tarjeta de elemento con un icono y un nombre. Se pueden modificar
los valores mediante las propiedades Input icon y name.

**Entradas**:
* `icon`: El nombre del icono. String.
* `name`: El nombre para representar al icono. String.

**Salidas**: Ninguno.

**Selector**: `app-element-card`.

### ElementCardBox

**Descripción**: Se encarga de almacenar e imprimir una colección de tarjetas de elementos.

**Entradas**: 
* `data`: Información almacenda para ser desplegada: Object[].

**Salidas**: Ninguno.

**Selector**: `app-element-card-box`.



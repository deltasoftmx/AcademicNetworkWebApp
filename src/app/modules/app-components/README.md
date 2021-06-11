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
* [TextAndIMageForm](#TextAndIMageForm)
* [CommentBox](#CommentBox)
* [PublicationCard](#PublicationCard)

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

### TextAndImageForm.

**Descripción**: Formulario con una caja de texto de tamaño auto-ajustable al texto contenido con soporte para adjuntar una imágen.
El envío del contenido se dispara mediante "enter" o el botón dedicado.

**Entradas**:
* `textInputLabel`: Label para la caja de texto. String.
* `textInputPlaceholder`: Placeholder para la caja de texto. String.

**Salidas**:
* `newContent`: Evento que se dispara cuando el contenido del formulario se envía. Datos de retorno del evento son:
  * `text`: Un `string` representando el contenido de la caja de texto.
  * `image`: Un objeto de tipo `File` representando la imágen.

**Selector**: `app-text-and-image-form`.

### CommentBox.

**Descripción**: Caja para desplegar comentarios y crear comentarios. Los comentarios soportan texto e imagen.

**Entradas**:
* `comments`: Arreglo de tipo `Comment` (revisar en las interfaces para publicaciones).

**Salidas**:
* `moreComments`: Evento que se dispara cuando se presiona el botón para recuperar más comentarios. No retorna datos.
* `newComment`: Evento que se dispara cuando se envía un nuevo comentario. Datos de retorno:
  * `text`: `string` representanto el texto del comentario.
  * `image`: Objeto `File` representando la imágen adjuntada.

**Selector**: `app-comment-box`.

### PublicationCard.

**Descripción**: Card para desplegar la información de una publicación.

**Entradas**:
`profileImgSrc`: `string`. La URL de la imagen de perfil del usuario autor de la publicación.
`profileName`: `string`. Nombre completo del usuario autor.
`publicationImgSrc`: `string`. URL de la imagen de la publicación.
`text`: `string`. Texto de la publicación.
`subtitle`: `string`. Texto debajo del nombre del usuario.

**Salidas**:
* `action`: Evento que informa que comando se ejecuto en la publicación. Datos retornados:
  * `name`: `string`. El nombre del comando (`comment`|`share`|`favorite`)

**Selector**: `app-comment-box`.

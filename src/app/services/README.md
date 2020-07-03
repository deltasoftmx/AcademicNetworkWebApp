# Services

En este directorio se encuentran todos los servicios globales alcanzables en
cualquier lado de la aplicación.

Todos los servicios deben ser ampliamente documentados para que puedan ser usados por otros programadores.

Los datos que se deben incluir son:

* Nombre del servicio (título 3).
* Nombre de la clase.
* Descripción del servicio.
* Atributos públicos.
  * Nombre.
  * Descripción.
  * Tipo.
* Métodos públicos.
  * Nombre del método.
  * Descripción.
  * Parámetros en orden y su tipo.
  * Tipo de dato de retorno.
* Se debe agregar un enlace a su documentación en el índice.

## Documentación.

### Índice.

* [Session](#Session)

### Session.

**Clase**: SessionService

**Descripción**: Maneja los datos de sesión del usuario. Todos los datos son almancenados en la memoria con `sessionStorage` con lo cual
sólo estan disponibles mientras el navegador esté corriendo.

**Atributos públicos**: Ninguno.

**Métodos públicos**:

* `set_userdata`
  * **Descripción**: Agrega atributos al objeto de datos del usuario.
  * **Parámetros**: 
    * `field`: String representando el nombre del campo.
    * `val`: Algún dato de cuaqluier tipo.
  * **Tipo de dato de retorno**: `Void`.
* `get_userdata`
  * **Descripción**: Retorna el objeto de datos de sesión del usuario.
  * **Parámetros**: `Void`.
  * **Tipo de dato de retorno**: `Object`.
* `end_session`
  * **Descripción**: Vacía los datos de sesión del usuario en la memoria y navega hacia la vista del login.
  * **Parámetros**: `Void`.
  * **Tipo de dato de retorno**: `Void`.


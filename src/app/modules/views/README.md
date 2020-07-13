# Views Module

Este módulo contiene todos los componentes que serán usados únicamente como vistas.

Estos componentes serán los que sean usados por en enrutador de Angular para desplegar vistas.

Cualquier componente cuyo único objetico sea servir como vista para el enrutador de Angular
debe ser registrado en este módulo.

Cada vista agregada debe ser documentada. Los datos que deben incluirse son:

* Descripción (qué hace y para qué sirve).
* Un enlace a su documentación en el índice.

## Documentación de las vistas.

### Índice.

* [Login](#Login)
* [Sign-Up](#Sign-Up)

### Login.

**Descripción**: Se pregunta por el nombre de usuario, el cuál es validado en el backend, posteriormente se pregunta por la contraseña la cuál también es validada. Finalmente se guardan los datos de session y se continúa a la vista de feed de usuario.

### Sign-Up.

**Descripción**: Se pregunta datos del usuario para su registro, estos son: nombre, apellidos, correo institucional,
contraseña, confirmación de la contraseña, programa educativo y una descripción. El formulario es validado para que
todos los datos se guarden a excepción del campo de descripción que puede estar vacío.
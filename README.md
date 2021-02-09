# Prueba técnica de Front End

Para ejecutar el proyecto sólo hay que clonarlo, ejecutar `npm install` y a continuación `npm start`

## Estructura del proyecto

La carpeta src del proyecto está dividida en varias subcarpetas:

    - assets: con los iconos usados en la app.
    
    - base: contiene la configuración de la store y reducers de redux. Así como stilos básicos usados en toda la app y tipado general.
    
    - components: aquí se encuentras los componentes comunes que se usan en direfentes partes de la app.
    
    - containers: las vistas de la aplicación están divididas aquí y cada una de ellas sigue el siguiente patrón:
         - actions: con las acciones necesarias para esa vista (si las tiene).
         - actionTypes: para los tipos de acciones.
         - reducers: con los reducers utilizados en esa vista.
         - containers: si tuviera.
         - models: con estos modelos se pretende facilitar los cambios de código si la respuesta de back cambiase.
         - selectors: selectores de la vista.
         - styles: con los estilos utilizados.
         - types: tipos concretos.

## Consideraciones adicionales

He utilizado la librería **react-loader-spinner** para añadir un loader cuando no se tienen datos y también husky para chequear el 'lint' y tests antes de realizar un commit y un push.

Se podrán ver 2 comentarios en la app con unas mejoras que habría añadido a futuro.

## Mejoras añadidas
  1. Loaders 
  2. Mensaje de error en el login si no se encuentra el usuario.

## Mejoras que hubiese implementado

  1. Validación de la contraseña. 
  2. Añadir un estado dirty para que cuando el usuario abandonase el form de actualizar los detalles, le saltase un modal advirtiéndole de que tiene cambios sin guardar.
  3. Modal en el logout preguntando si está seguro de que quiere salir.
  4. Modal de errores en las llamadas.
  5. Los requisitos opcionales que se pedían (sólo he hecho algún test).


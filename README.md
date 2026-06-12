# Ruleta Sin Repetir 
LINK GIT JESUS: https://github.com/byronfire2004/desbuggear-ruleta/edit/main/README.md

Desafío basado en el proyecto original de [Gh0stRaccoon](https://github.com/Gh0stRaccoon/M3_JSFS_45-6)

## ¿Qué se modificó?
La ruleta original elegía participantes al azar pero podía repetirlos. Se modificó para que cada participante salga una sola vez.

##ARREGLO DE MODIFICACION DEL BOTON (ESTABA ERRONEO MODIFICAR EL BOTON) SE CREA FUNCION YA PARTICIPADO
## ¿Cómo funciona?
- Presiona el botón para elegir un participante al azar
- Cada participante solo puede salir una vez
- Cuando todos participaron, muestra "YA FUE" y reinicia

## Conceptos aplicados
- `splice` para eliminar al participante del arreglo después de salir
- `indexOf` para encontrar su posición dentro del arreglo
- `length` para detectar cuando el arreglo está vacío
- `yaParticiparon` arreglo que guarda a quienes ya pasaron

## Archivos
- `index.html` — estructura de la página
- `assets/js/ruleta.js` — lógica del juego

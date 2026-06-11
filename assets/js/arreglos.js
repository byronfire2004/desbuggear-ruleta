const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

const mesSeleccionado = prompt("¿En qué mes naciste?, pon un número del 1 al 12")
const mesSeleccionadoNumber = Number(mesSeleccionado)

if(!mesSeleccionadoNumber || mesSeleccionado <= 0 || mesSeleccionado > 12) {
    console.log("Porfavor ingresa un número válido")
} else {
    console.log('El mes seleccionado es: ' + meses[mesSeleccionadoNumber - 1])
}
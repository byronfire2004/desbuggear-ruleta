const participantes = [
    "Bastián Abarca",
    "Stefany Aguilera",
    "María Cárdenas",
    "Yerica Cortés",
    "Francisca Fernández",
    "Francisco Fuentealba",
    "Kamila González",
    "Vesna Guerra",
    "Williams Jacobs",
    "Daniela Martínez",
    "Ellymar Mendoza",
    "Sebastián Ortega",
    "Jesus Pereira",
    "Diego Pinilla",
    "Alan Rodríguez",
    "Brigitte Rudas",
    "Daniel Schnettler",
    "Nadia Sepúlveda",
    "Ronald Stark",
    "Rodolfo Moreno",
    "Cristóbal Estrada",
    "Kevin Reyes",
    "Babinsky Magloire",
    "Pablo Canto",
    "Damazo Sepúlveda"
];

const colores = [
    "azul",
    "rojo",
    "violeta",
    "morado"
]

function lanzarRuleta(min, max) {
    const numeroAleatorio = Math.random() // entre 0 y <1

    const resultado = Math.floor(numeroAleatorio * (max - min + 1)) + min

    return resultado
}

function aleatorioDesdeArreglo(arreglo) {
    const index = lanzarRuleta(0, arreglo.length - 1)
    const elementoArreglo = arreglo[index]

    return elementoArreglo
}

function renderizarResultado(idElement, texto) {
    const elementoARenderizar = document.getElementById(idElement)

    elementoARenderizar.textContent = texto
}

const getRandomButton = document.querySelector("#getRandom")

getRandomButton.addEventListener("click", () => {
    const resultado = aleatorioDesdeArreglo(participantes)  
    renderizarResultado("resultado", resultado)
})

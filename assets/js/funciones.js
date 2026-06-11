// declarar una funcion
function saludar(nombre, multiplicador = 1) {
    var raza = "saiyajin"

    function calcularKi(nombre, multiplicador) {
        const ki = nombre.length * multiplicador // Goku -> 4 | Vegeta -> 6 caracteres de largo
        return " tengo " + ki + " de ki."
    }

    return "Hola soy " + nombre + " y soy " + raza + calcularKi(nombre, multiplicador)
}

// invocar una funcion (ejecutar funcion)
const saludoDeGoku = saludar("Goku", 2)
const saludoDeVegeta = saludar("Vegeta")

console.log(saludoDeGoku)
console.log(saludoDeVegeta)

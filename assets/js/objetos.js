const taza = {
    color: "rojo",
    diseño: "Mapache saltando sobre hojas de otoño",
    peso: "100g",
    material: "Plástico",
    categoria: ["Animales", "naturaleza"],
    origen: "China",
    precio: 8000,
    tamaño: "250cc",
    personalizada: true,
    cambioColor() {
        document.write("<h2>Cambió a color negro</h2>")
    }
}

const seleccion = "diseño"

document.write("El " + seleccion + " es: " + taza[seleccion])

taza.cambioColor()

// freeze bloquea el objeto completo y no puedo mutar propiedades ni crearle nuevas propiedades
Object.freeze(taza)

// seal bloquea la creacion de nuevas propiedades, pero podemos reasignar los valores de las existentes
Object.seal(taza)
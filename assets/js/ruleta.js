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

const yaParticiparon = [];

function renderizarLista() {
    const lista = document.getElementById("lista-pendientes");
    const contador = document.getElementById("contador");

    lista.innerHTML = "";

    participantes.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p;
        lista.appendChild(li);
    });

    yaParticiparon.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p;
        li.classList.add("ya-salio");
        lista.appendChild(li);
    });

    contador.textContent = `Quedan ${participantes.length} de ${participantes.length + yaParticiparon.length} participantes`;
}

function lanzarRuleta(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aleatorioDesdeArreglo() {
    if (participantes.length === 0) {
        document.getElementById("resultado").textContent = "¡Ya participaron todos!";
        setTimeout(() => location.reload(), 3000);
        return;
    }

    const index = lanzarRuleta(0, participantes.length - 1);
    const elegido = participantes.splice(index, 1)[0];
    yaParticiparon.push(elegido);

    document.getElementById("resultado").textContent = elegido;
    renderizarLista();
}

document.getElementById("getRandom").addEventListener("click", aleatorioDesdeArreglo);

renderizarLista();
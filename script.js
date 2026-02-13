// Paso 1: Obtener el botón por su ID
const boton = document.getElementById("contadorBtn");

// Paso 2: Crear variable contador
let contador = 0;

// Paso 3: Escuchar el evento click
boton.addEventListener("click", function() {
    contador++; // Incrementar contador
    boton.textContent = contador; // Actualizar texto del botón
});

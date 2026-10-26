//Definir elementos del DOM
let mensaje = document.querySelector("#mensaje")
let sesion = document.querySelector("#sesion")
let cerrar = document.querySelector("#cerrarSesion")

//Definir flujo

cerrar.addEventListener("click", cerrarSesion)


//Definir funciones
function mostrarMensaje(texto) {
    mensaje.textContent = texto
}

function mostrarSesion(usuario) {
    mensaje.textContent = ""
    sesion.textContent = "Bienvenido al sistema " + usuario.nombre
}

function cerrarSesion(){
    sessionStorage.removeItem("sesionActual")
    sesion.textContent=""
    cerrar.hidden=true
    mostrarMensaje("Cerraste sesión")
    window.location.href="../index.html"
}
//agregar evaluar alumno
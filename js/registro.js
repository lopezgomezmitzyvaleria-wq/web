//Definir elementos del DOM
let formRegistro = document.querySelector("#formRegistro")

let mensaje = document.querySelector("#mensaje")
let sesion = document.querySelector("#sesion")
let iniciar = document.querySelector("#botonSesion")


//Definir flujo
iniciar.addEventListener("click", function () {
    setTimeout(() => {
        window.location.href = "../index.html"
    }, 1000)

})
formRegistro.addEventListener("submit", registrarUsuario)

//Definir funciones
function mostrarMensaje(texto) {
    mensaje.textContent = texto
}
function registrarUsuario(event) {
    event.preventDefault()

    let nombre = document.querySelector("#nombreRegistro").value.trim();
    let correo = document.querySelector("#correoRegistro").value.trim();
    let contra = document.querySelector("#passwordRegistro").value.trim();
    let usuariosRegistrados = JSON.parse(localStorage.getItem("Usuarios")) || []

    if (nombre == "" || correo == "" || contra == "") {
        mostrarMensaje("Todos los campos son obligatorios")
        return
    } else if (contra.length < 8) {
        mostrarMensaje("La contraseña debe ser minimo 8 caracteres")
        return
    }
    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (usuariosRegistrados[i].email == correo) {
            mostrarMensaje("Este correo ya fue registrado. Intenta con uno nuevo.")
            return
        }
    }
    usuariosRegistrados.push({
        name: nombre,
        email: correo,
        password: contra
    })

    localStorage.setItem("Usuarios", JSON.stringify(usuariosRegistrados))
    mostrarMensaje("Usuario registrado")
    formRegistro.reset();

    setTimeout(() => {
        window.location.href = "../index.html"
    }, 1000)
}





//Definir elementos del DOM
let formLogin = document.querySelector("#formLogin")
let mensaje = document.querySelector("#mensaje")
let sesion = document.querySelector("#sesion")

//Definir flujo
formLogin.addEventListener("submit", iniciarSesion)
recuperarSesion()


//Definir funciones
function mostrarMensaje(texto) {
    mensaje.textContent = texto
}

function iniciarSesion(event) {
    event.preventDefault()

    let correo = document.querySelector("#correoLogin").value
    let contra = document.querySelector("#passwordLogin").value

    let usuariosRegistrados = JSON.parse(localStorage.getItem("Usuarios") || "[]")

    let usuarioLoggeado = usuariosRegistrados.find(
        function (item) {
            return item.email == correo && item.password == contra
        }
    )
    if (!usuarioLoggeado) {
        mostrarMensaje("Credenciales incorrectas")
        return
    }

    let datosSesion = {
        nombre: usuarioLoggeado.name,
        correo: usuarioLoggeado.email
    }
    sessionStorage.setItem("sesionActual", JSON.stringify(datosSesion))
    //alert(datosSesion.correo)
    mostrarMensaje("Iniciaste sesión correctamente")
    //
    //mostrarSesion(datosSesion)
    
    formLogin.reset()
    window.location.href="../pages/home.html"
}
function recuperarSesion() {
    try {
        let datos = sessionStorage.getItem("sesionActual")
        if (datos) {
            let usuario = JSON.parse(datos)
            mostrarSesion(usuario)
            mostrarMensaje("Sesion recuperada")
            cerrar.hidden=false
        }
    } catch {
        mostrarMensaje("No fue posible cargar los datos de sesión")

    }
}

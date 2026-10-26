//Definir elementos del DOM
let mensaje = document.querySelector("#mensaje")
let sesion = document.querySelector("#sesion")
let cerrar = document.querySelector("#cerrarSesion")

const API_BASE_URL = "http://localhost:3000";

const contenedorDatos = document.querySelector("#contenedorDatos")
const estadoDatos = document.querySelector("#estadoDatos")
const btnCargarDatos = document.querySelector("#cargarDatos")

//Definir flujo
//mostrarsesion y recuperar
cerrar.addEventListener("click", cerrarSesion)
btnCargarDatos.addEventListener("click", cargarDatos)


//Definir funciones
function mostrarMensaje(texto) {
    mensaje.textContent = texto
}

function mostrarSesion(usuario) {
    mensaje.textContent = ""
    sesion.textContent = "Bienvenido al sistema " + usuario.nombre
}

function cerrarSesion() {
    sessionStorage.removeItem("sesionActual")
    sesion.textContent = ""
    cerrar.hidden = true
    mostrarMensaje("Cerraste sesión")
    window.location.href = "../index.html"
}
//agregar evaluar alumno

async function cargarDatos() {
    estadoDatos.textContent = "Consultando practicas...";
    contenedorDatos.replaceChildren();
    try {
        const respuesta = await fetch("http://localhost:3000/api/Practicas_FI");
        
        const resultado = await respuesta.json();

        if (!respuesta.ok || resultado.status != "success") {
            throw new Error("El API no pudo consultar los datos");
        }

        if (resultado.data.length == 0) {
            estadoDatos.textContent = "No hay  registrados";
            return;
        }

        resultado.data.forEach(practica => {
            const card = document.createElement("article");
            card.className = "Practicas_FI";

            const practica_id = document.createElement("h3")
            practica_id.textContent = practica.practica_id
            
            card.append(practica_id)
            contenedorDatos.appendChild(card)
        });

    } catch (error) {
        //console.log("Error al cargar los datos: " + error);
        estadoDatos.textContent = "No fue posible cargar las practicas. Revisa la conexión";
    }

}
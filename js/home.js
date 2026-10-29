// Definir elementos del DOM
let mensaje = document.querySelector("#mensaje");
let sesion = document.querySelector("#sesion");
let cerrar = document.querySelector("#cerrarSesion");

const API_BASE_URL = "http://localhost:3000";

const contenedorDatos = document.querySelector("#contenedorDatos");
const estadoDatos = document.querySelector("#estadoDatos");
const btnCargarDatos = document.querySelector("#cargarDatos");

// Definir flujo (con validaciones de existencia para evitar errores)
if (cerrar) {
    cerrar.addEventListener("click", cerrarSesion);
}
if (btnCargarDatos) {
    btnCargarDatos.addEventListener("click", cargarDatos);
}

recuperarSesion();

// Definir funciones
function mostrarMensaje(texto) {
    if (mensaje) {
        mensaje.textContent = texto;
        mensaje.className = ""; // Limpia clases previas de estilos destacados
    }
}

function mostrarSesion(usuario) {
    if (mensaje) {
        mensaje.textContent = "";
        mensaje.className = "";
    }
    if (sesion) {
        sesion.textContent = "Bienvenido al sistema " + usuario.nombre;
        sesion.className = "alerta-bienvenida"; // Aplica estilo solo al mensaje de bienvenida
    }
}

function recuperarSesion() {
    try {
        let datos = sessionStorage.getItem("sesionActual");
        if (datos) {
            let usuario = JSON.parse(datos);
            mostrarSesion(usuario);

            if (mensaje) {
                mensaje.textContent = "Sesión recuperada";
                mensaje.className = "alerta-recuperada"; // Aplica estilo solo al mensaje de recuperación
            }

            if (cerrar) {
                cerrar.hidden = false;
            }
        }
    } catch (error) {
        mostrarMensaje("No fue posible cargar los datos de sesión");
    }
}

function cerrarSesion() {
    sessionStorage.removeItem("sesionActual");
    if (sesion) {
        sesion.textContent = "";
        sesion.className = "";
    }
    if (cerrar) {
        cerrar.hidden = true;
    }
    mostrarMensaje("Cerraste sesión");
    window.location.href = "../index.html";
}

// Cargar datos desde la API
async function cargarDatos() {
    if (!estadoDatos || !contenedorDatos) return;

    estadoDatos.textContent = "Consultando prácticas...";
    contenedorDatos.replaceChildren();

    try {
        const respuesta = await fetch("http://localhost:3000/api/Practicas_FI");
        const resultado = await respuesta.json();

        if (!respuesta.ok || resultado.status != "success") {
            throw new Error("El API no pudo consultar los datos");
        }

        if (resultado.data.length == 0) {
            estadoDatos.textContent = "No hay prácticas registradas";
            return;
        }

        estadoDatos.textContent = "";

        resultado.data.forEach(practica => {
            const card = document.createElement("article");
            card.className = "Practicas_FI";

            // Título principal
            const practica_id = document.createElement("h3");
            practica_id.className = "practica-titulo";
            practica_id.textContent = `Práctica: ${practica.practica_id}`;

            const detallesDiv = document.createElement("div");
            detallesDiv.className = "practica-detalles";

            const presupuesto = document.createElement("p");
            presupuesto.innerHTML = `<strong>Presupuesto:</strong> $${practica.Presupuesto}`;

            const viaticos = document.createElement("p");
            viaticos.innerHTML = `<strong>Viáticos:</strong> $${practica.Viaticos}`;

            // --- FUNCIÓN PARA LIMPIAR Y FORMATEAR LA FECHA ---
            const formatearFecha = (fechaStr) => {
                if (!fechaStr) return "No definida";
                // Extraemos solo la parte de la fecha (YYYY-MM-DD) para evitar problemas de zona horaria por la hora UTC
                const soloFecha = fechaStr.split("T")[0];
                const [anio, mes, dia] = soloFecha.split("-");
                if (!anio || !mes || !dia) return fechaStr; // Si viene en otro formato, lo regresa tal cual
                return `${dia}/${mes}/${anio}`; // Formato limpio Día/Mes/Año
            };

            const fecha_inicio = document.createElement("p");
            fecha_inicio.innerHTML = `<strong>Fecha de Inicio:</strong> ${formatearFecha(practica.fecha_inicio)}`;

            const fecha_fin = document.createElement("p");
            fecha_fin.innerHTML = `<strong>Fecha de Fin:</strong> ${formatearFecha(practica.fecha_fin)}`;

            const destino = document.createElement("p");
            destino.innerHTML = `<strong>Destino:</strong> ${practica.destino}`;

            detallesDiv.append(presupuesto, viaticos, fecha_inicio, fecha_fin, destino);
            card.append(practica_id, detallesDiv);

            contenedorDatos.appendChild(card);
        });

    } catch (error) {
        estadoDatos.textContent = "No fue posible cargar las prácticas. Revisa la conexión";
    }
}
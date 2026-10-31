const API_BASE_URL = "http://localhost:3000";

const formTransporte = document.querySelector("#formTransporte");
const mensaje = document.querySelector("#mensaje");
const btnCargarTransportes = document.querySelector("#cargarTransportes");
const estadoTransportes = document.querySelector("#estadoTransportes");
const contenedorTransportes = document.querySelector("#contenedorTransportes");
const regresar=document.querySelector("#regresar")


regresar.addEventListener("click", function () {
    window.location.href = "./home.html"

})
async function enviarPOST(datos) {
    const respuesta = await fetch(API_BASE_URL + "/api/Practicas_FI", {
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok || resultado.status != "success") {
        throw new Error(
            resultado.message
        );
    }
    return resultado;
}

formTransporte.addEventListener("submit", async function (event) {
    event.preventDefault();

    const datos = {
        tipo_transporte_id: document.querySelector("#tipo_transporte_id").value,
        nombre_chofer: document.querySelector("#nombre_chofer").value.trim(),
        capacidad_max: document.querySelector("#capacidad_max").value.trim(),
        placa: document.querySelector("#placa").value.trim(),
        empresa: document.querySelector("#empresa").value.trim(),
    };
    try {
        const resultado = await enviarPOST(datos);
        mensaje.textContent = resultado.message;
        formTransporte.reset();
        //window.location="home.html";

    } catch (error) {
        mensaje.textContent = error.message;
    }
})


if (btnCargarTransportes) {
    btnCargarTransportes.addEventListener("click", cargarTransportes);
}

async function cargarTransportes() {
    if (!estadoTransportes || !contenedorTransportes) return;

    estadoTransportes.textContent = "Consultando transportes...";
    contenedorTransportes.replaceChildren();

    try {
        const respuesta = await fetch(`${API_BASE_URL}/api/Transportes`);
        const resultado = await respuesta.json();

        if (!respuesta.ok || resultado.status != "success") {
            throw new Error("El API no pudo consultar los transportes");
        }

        if (resultado.data.length == 0) {
            estadoTransportes.textContent = "No hay transportes registrados";
            return;
        }

        estadoTransportes.textContent = "";

        resultado.data.forEach(transporte => {
            const card = document.createElement("article");
            card.className = "Transporte_Card"; 

            const titulo = document.createElement("h3");
            titulo.className = "transporte-titulo";
            titulo.textContent = `Empresa: ${transporte.empresa}`;

            const detallesDiv = document.createElement("div");
            detallesDiv.className = "transporte-detalles";

            const chofer = document.createElement("p");
            chofer.innerHTML = `<strong>Chofer:</strong> ${transporte.nombre_chofer}`;

            const capacidad = document.createElement("p");
            capacidad.innerHTML = `<strong>Capacidad Máx:</strong> ${transporte.capacidad_max} pasajeros`;

            const placa = document.createElement("p");
            placa.innerHTML = `<strong>Placa:</strong> ${transporte.placa}`;

           
            const tipoTransporte = document.createElement("p");
            tipoTransporte.innerHTML = `<strong>Tipo de Transporte:</strong> ${transporte.tipo_transporte || transporte.nombre_tipo || 'No especificado'}`;

            detallesDiv.append(chofer, capacidad, placa, tipoTransporte);
            card.append(titulo, detallesDiv);

            contenedorTransportes.appendChild(card);
        });

    } catch (error) {
        estadoTransportes.textContent = "No fue posible cargar los transportes. Revisa la conexión";
    }
}
const API_BASE_URL = "http://localhost:3000";

const formTransporte = document.querySelector("#formTransporte");
const mensaje = document.querySelector("#mensaje");




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
        transporte_id: document.querySelector("#transporte_id").value.trim(),
        tipo_transporte_id: document.querySelector("#tipo_transporte_id").value.trim(),
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
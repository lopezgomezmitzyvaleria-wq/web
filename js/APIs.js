//declarar variables

const formPokemon = document.querySelector("#formPokemon")
const pokemon = document.querySelector("#pokemon")
const mensaje = document.querySelector("#mensaje")
const resultado = document.querySelector("#resultado")

//flujo
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(
//     function (respuesta) {

//         return respuesta.json()

//     }
// ).then(
//     function (datos) {
//         mensaje.textContent = datos.name 
//         //alert("hola")
//     }
// ).catch(
//     function(error){
//         mensaje.textContent="Ocurrió el error: "+error.message
//     }
// )

formPokemon.addEventListener("submit", function (event) {
    event.preventDefault()
    let busqueda = pokemon.value.trim().toLowerCase()
    mensaje.textContent = "Buscando pokémon..."
    resultado.textContent = ""
    fetch("https://pokeapi.co/api/v2/pokemon/" + busqueda)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("No se encontró pokémon")
            }
            return respuesta.json()
        })
        .then(function (datos) {
            mensaje.textContent = "Pokémon encontrado: " + datos.name
            resultado.innerHTML = "<h2>" + datos.name + "</h2>" +
                "<img src='" +datos.sprites.front_default+"'>"
    
            resultado.innerHTML = "<img src='" +datos.sprites.front_default+"'>"+ 
            "<h3>id:" + datos.id + "</h3>" +
            "<h3>peso: " +datos.weight + "</h3>" +
            "<h3>experiencia: " +datos.base_experience + "</h3>"
                

        })
        .catch(function (error) {
            mensaje.textContent = "Ocurrió el error: " + error.message
        })
})

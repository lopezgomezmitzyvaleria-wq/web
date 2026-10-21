// Objetos y arreglos en JS
//Objeto
let alumno = {
    numCuenta : "322007802",
    nombre : "Mitzy Valeria",
    apellidoP : "López",
    apellidoM : "Gómez",
    edad : 20
}
//Arreglo
let calificaciones = [6, 7, 10];
//join convierte elementos del arreglo en texto y los separa por comas
document.getElementById("resultado").textContent = "Alumno: "+alumno.nombre + 
                                                    " Calificaciones: " +calificaciones.join(", ")
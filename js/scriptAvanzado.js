const pizarron = document.querySelector("#resultado");
//Ej1 Objetos y arreglos en JS
//Objeto
let alumno = {
    numCuenta: "322007802",
    nombre: "Mitzy Valeria",
    apellidoP: "López",
    apellidoM: "Gómez",
    edad: 20
}
//Arreglo
let calificaciones = [6, 7, 10];
//join convierte elementos del arreglo en texto y los separa por comas
document.getElementById("resultado").innerHTML += "<br>Alumno: " + alumno.nombre +
    " Calificaciones: " + calificaciones.join(", ")
//saludar();
//ej2. funcion saludar
function saludar() {
    //querySelector es más actual, este abarca todos los get
    //document.querySelector("#resultado").textContent = "Hola " + alumno.nombre;
    //pizarron.innerHTML += "<br>Hola " + alumno.nombre;
    let saludo = " Te estoy saludando";
    pizarron.innerHTML += "<br>Hola " + alumno.nombre + saludo;

}

//propiedades y métodos en JS
let profesor = {
    numTrabajador: "897047",
    nombre: "Mitzy Valeria",
    apellidoP: "López",
    apellidoM: "Gómez",
    clase: "Programación Orientada a Objetos",
    nombreCompleto() {
        return this.nombre + " " + this.apellidoP + " " + this.apellidoM
    }
}
//inerHMTL para que interprete etiquetas de html
//+= es agregar texto
//pizarron.textContent += + profesor.nombreCompleto(); 
pizarron.innerHTML += "<br>" + profesor.nombreCompleto();

//Ej 4 Metodos de arreglos push y pop
calificaciones.push(5);
pizarron.innerHTML += "<br> Nuevas calificaciones: " + calificaciones.join(" ,");
calificaciones.pop();
calificaciones.push(6);
pizarron.innerHTML += "<br> Nuevas calificaciones: " + calificaciones.join(" ,");
//filter
let aprobadas = calificaciones.filter(n => n >= 8); //cual elemento es mayor o igual a 8 y se guarda en n
pizarron.innerHTML += "<br> Calificaciones aprobadas: " + aprobadas.join(" ,");
//map
let duplicado = calificaciones.map(n => n*2);
pizarron.innerHTML += "<br> Calificaciones duplicadas: " + duplicado.join(" ,");
//scope: el alcance local o global de variables


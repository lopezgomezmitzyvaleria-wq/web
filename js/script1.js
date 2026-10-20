//alert("Hola mundo");
console.log("Hola mundo oculto"); //se usa para debuggear

const nombre = "Mitzy"; //nadie mas puede cambiar su valor
//nombre = "Valeria" //esto marca un error
let nombre1 = "Valeria" //let para variables cambiantes
nombre1 = "López"
//var puede ser redeclarada o redefinida
var nombre2 = "Yaretzy"
console.log("Bienvenido al sistema " + nombre2);
var nombre2 = "Mariel"
console.log("Bienvenido al sistema " + nombre);
console.log("Bienvenido al sistema " + nombre1);
console.log("Bienvenido al sistema " + nombre2);
//tipos de datos
let edad = 20; //int
let ciudad = "México"; //string
let seMurio = false; //bool
let tieneDinero = null; //nulo xd
let simbolo = Symbol(""); 

document.getElementById("name").textContent=nombre1;
document.getElementById("age").textContent=edad;
document.getElementById("city").textContent=ciudad;

function cambiaEdad(){
    edad++;
    document.getElementById("age").textContent=edad
}
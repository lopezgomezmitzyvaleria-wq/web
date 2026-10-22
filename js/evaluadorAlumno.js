//let calificacion = 8;
const pResultado = document.querySelector("#resultado")
const inputNombre = document.querySelector("#nombre")
const inputCalificacion = document.querySelector("#calificacion")
const btnEvaluar = document.querySelector("#evaluar")

// if (calificacion >= 9) {
//     resultado.textContent = "Excelente"
// } else if (calificacion >= 6) {
//     resultado.textContent =" Más o menos"
// } else{
//     resultado.taxtContent = "Muy mal"
//}

//Ejemplo con switch
// switch(Math.floor(calificacion)){
//     case 10: 
//     resultado.textContent = "Perfecto"
//     break;
//     case 9: 
//     resultado.textContent = "Casi perfecto"
//     break;
//     case 8: 
//     resultado.textContent = "casi 9"
//     break;
//     default:
//         resultado.textContent = "Calificación invalida"
// }

//Ejemplo Ciclos 
//FOR
// let texto = ""
// for (let i = 0; i <= 10; i++) {
//     texto += i + " "
// }
// resultado.textContent = texto

//WHILE
// let i=0
// while (i <= 10) {
//     texto += i + " "
//     i++
// }
// resultado.textContent = texto

//Ejemplo array contador
// let calificaciones = [8, 5, 6, 4, 7, 10]
// let aprobadas = 0
// for (let i = 0; i <= calificaciones.length; i++) {
//     if (calificaciones[i] >= 6) {
//         aprobadas++
//     }
// }
// resultado.textContent = "Materias aprobadas: " + aprobadas
//funcion que recibe primero tipo de elemento al que se esta preparando, una funcion anonima
//trim quita espacios de los lados
btnEvaluar.addEventListener("click",
    function () {
        //pResultado.textContent = "Hiciste click en el boton"
        if (inputNombre.value.trim() == "") {
            pResultado.textContent = "Escribe el nombre del alumno"
        } else if (inputCalificacion.value == ""){
            pResultado,textContent = "Escribe la calificación del alumno"
        } else if(inputCalificacion.value>=9){
            pResultado.textContent= "¡Excelente!"
            pResultado.style.color="green"
        } else if(inputCalificacion.value>=6){
            pResultado.textContent= "Puedes mejorar :|"
            pResultado.style.color="orange"
        } else {
            pResultado.textContent= "¡¡¡Muy mal  !!!"
            pResultado.style.color="red"
        }         
    }
)
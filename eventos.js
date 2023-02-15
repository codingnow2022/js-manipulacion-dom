// LOS EVENTOS SON AQUELLO QUE SUCEDE CUANDO EL USER INTERACTUA CON NUESTRO WEBSITE
// DA CLICK, RECARGA, HACE HOVER, HACE SCROLL ETC, ONCHANGE

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const button = document.getElementById("btn-calcular");
const resultado = document.querySelector("#result");

// EXPLICAMOS QUE AUNQUE DENTRO DE LAS ETIQUETAS DE HTML PODEMOS PONER DIRECTAMENTE EL ONCHANGE=""
//  Y DENTRO PONER EL CODIGO JS, ESTO SERIA TEDIOSO, MOSTRAR EJEMPLO DEL CONSOLE.LOG
// PARA EVITAR ESO, UTILIZAMOS FUNCIONES
// ABC GIT PRUEBA

function sumar() {
    console.log(Number(input1.value) + Number(input2.value));
    // Utilizamos el .value para acceder al valor de cada input, tambien usamos la funcion 
    // number la cual nos permite convertir string en enteros
    resultado.innerHTML= "El resultado de la suma es: " + (Number(input1.value) + Number(input2.value));
    // Enviamos el mensaje a un parrafo
}


// TODO LO ANTERIOR LO HICIMOS GRACIAS AL ONCLICK Y ONCHANGE PUESTOS EN EL HTML
// A CONTINUACIÓN INVOCAREMOS FUNCIONES SIN USAR ESTOS ELEMENTOS EN EL HTML, TODO DEBE
// QUEDAR EN EL JS, ESTO GRACIAS A LOS addEventListener

const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const btn = document.getElementById('btn-multi');
const result = document.getElementById('resultM');
// AL AGREGAR LA FUNCION addEventListener debemos suministrarle dos parametros, evento y nombre de la función
btn.addEventListener('click', multiplicar);
function multiplicar(){
    const operacion = parseInt(input3.value* input4.value);
    result.innerHTML = "El resultado de la multiplicación es: " + operacion;
}

// -----------------------------------------
// CAPTURAR INFORMACIÓN DE UN FORMULARIO SIN QUE ESTE SE ENVÍE
const input5 = document.querySelector('#calculo5');
const input6 = document.querySelector('#calculo6');
const btn_divi = document.getElementById('btn-divi');
const resultD = document.getElementById('resultD');
const form = document.querySelector('#formulario');
form.addEventListener('submit', dividir);
// event y event.preventDefault sirven para ejecutar una función sin que se envie el formulario o se recargue
function dividir(event){
    event.preventDefault();
    const operacion = parseInt(input5.value / input6.value);
    resultD.innerHTML = "El resultado de la división es: " + operacion;
}

// OTRA FORMA DE HACERLO ES AGREGARLE AL BTN EL ATRIBUTO TYPE="BUTTON Y HACER LA MISMA OPERACION CON CLIC"
// TODO ESTO SIN LA NECESIDAD DEL EVENT.PREVENTDEFAULT LN48

// const input5 = document.querySelector('#calculo5');
// const input6 = document.querySelector('#calculo6');
// const btn_divi = document.getElementById('btn-divi');
// const resultD = document.getElementById('resultD');
// const form = document.querySelector('#formulario');
// form.addEventListener('click', dividir);
// // event y event.preventDefault sirven para ejecutar una función sin que se envie el formulario o se recargue
// function dividir(event){
//     const operacion = parseInt(input5.value / input6.value);
//     resultD.innerHTML = "El resultado de la división es: " + operacion;
// }


// TODO ESTO Y EL ARCHIVO DOM.JS SON ESPECÍFICAMENTE LA MANIPULACIÓN DEL DOM


// TAREA: CONSULTAR LOS EVENTOS
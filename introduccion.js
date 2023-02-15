/*
FUNCIONES:
    Las funciones son bloques de lineas de código que ejecutan una acción en específico, estas pueden
    contener o encapsular variables, condicionales, bucles arreglos objetos etc
*/
function nombreCompleto(name, lastname) {
    return name + ' ' + lastname;
}

nombreCompleto('Felipe', 'Restrepo');
// -----------------------------------------------------------------------------------------------------------------------------------------
/*
CONDICIONALES: IF - SWITCH

IF (ELSE ELSEIF) : NOS PERMITE HACER VALIDACIONES A DIFERENTES VARIABLES O DATOS DE SER NECESARIO

EJEMPLO*/
const tipoSuscripcionii = "Premium";
if (tipoSuscripcionii == "Basic") {
    console.log("Solo puedes acceder a entrenar 3 días a la jornada en una jornada elegida");
}
else if (tipoSuscripcionii == "Premium") {
    console.log("Puedes acceder a todas las sesiones que consideres necesario en una jornada elegida");
}
else if (tipoSuscripcionii == "Gold") {
    console.log("Puedes acceder a todas las sesiones que consideres necesario en la jornada que desees");
}

// EJEMPLO CON FUNCIÓN

function validarSuscripcioni(tipoSuscripcioni) {
    if (tipoSuscripcioni == "Basic") {
        console.log("Solo puedes acceder a entrenar 3 días a la jornada en una jornada elegida");
    }
    else if (tipoSuscripcioni == "Premium") {
        console.log("Puedes acceder a todas las sesiones que consideres necesario en una jornada elegida");
    }
    else if (tipoSuscripcioni == "Gold") {
        console.log("Puedes acceder a todas las sesiones que consideres necesario en la jornada que desees");
    }
}

validarSuscripcioni("Gold");

/*
SWITCH CASE: TODOS LOS CASES SE COMPARAN O VALIDAN CON LA MISMA VARIABLE, VALOR O CONDICIÓN QUE DEFINIMOS EN EL SWITCH
             SUELE UTILIZARSE CUANDO QUEREMOS VALIDAR MÁS DE 2 O 3 OPCIONES DE UNA VARIABLE, PERO SOLO DE ESA VARIABLE
EJEMPLO:*/

const tipoSuscripcion = "Basic";
switch (tipoSuscripcion) {
    case "Basic":
        console.log("Solo puedes acceder a entrenar 3 días a la jornada en una jornada elegida")
        break;
    case "Premium":
        console.log("Puedes acceder a todas las sesiones que consideres necesario en una jornada elegida")
        break;
    case "Gold":
        console.log("Puedes acceder a todas las sesiones que consideres necesario en la jornada que desees")
        break;
}

// EJEMPLO CON FUNCIÓN

function validarSuscripcion(tipoSuscripcion) {

    switch (tipoSuscripcion) {
        case "Basic":
            console.log("Solo puedes acceder a entrenar 3 días a la jornada en una jornada elegida")
            break;
        case "Premium":
            console.log("Puedes acceder a todas las sesiones que consideres necesario en una jornada elegida")
            break;
        case "Gold":
            console.log("Puedes acceder a todas las sesiones que consideres necesario en la jornada que desees")
            break;
    }
}

validarSuscripcion("Gold")

// -----------------------------------------------------------------------------------------------------------------------------------------

/* 
CICLOS: ES LA ITERACIÓN O LA EJECUCIÓN EN BUCLE DE UNA ESTRUCTURA DE CÓDIGO HASTA QUE SE CUMPLA UNA CONDICIÓN, 
        CÓMO POR EJEMPLO QUE UNA VARIABLE SEA MAYOR QUE 10, O FALSE ETC.
        Basicamente es la forma de ejecutar un bloque de código mientras una condición sea verdadera o se cumpla
        WHILE - FOR - DO WHILE
        
        WHILE: REALIZA LA VALIDACIÓN ANTES DE EJECUTAR LA ESTRUCTURA O BLOQUE DE CÓDIGO
        DO WHILE: REALIZA LA EJECUCIÓN DE LA ESTRUCTURA O BLOQUE DE CÓDIGO Y LUEGO SI REALIZA LA VALIDACIÓN
 */
let i = 0;

while (i < 5) {
    console.log("El valor de i es:", + i);
}
// Si lo dejamos como en el ejemplo anterior podriamos generar un ciclo infinito, algo que es muy malo para nuestros equipos
let o = 0;

while (o < 5) {
    console.log("El valor de i es:", + o);
    o++
}


// OTRO EJEMPLO:

let u = 10;

while (u >= 2) {
    console.log("El valor de i es: ", + u);
    u--
}
// OTRO EJEMPLO:

let suma = prompt("cuanto es 2 + 2: ");

while (suma != 4) {
    suma = prompt("cuanto es 2 + 2: ")
}
alert("Felicidades, sabes cuanto es 2 + 2");

/*
FOR : EL FOR ES UN CICLO EN EL CUAL DEBEMOS DEFINIR LOS VALORES O DATOS QUE TENDRAN LAS VARIABLES 
AL PRINCIPIO Y FIN DE LA EJECUCIÓN DE LA ESTRUCTURA O BLOQUE DE CÓDIGO, ES DECIR DEBEMOS DEFINIR UN MOMENTO EN 
EL QUE NUESTRO BUCLE O CICLO DEBE TERMINAR "FINITO"

La sintaxis del for siempre empezará por solicitarnos crear una variable con el valor y nombre que querramos
(generalemente un contador i), luego nos pide la validación a realizar y al final definimos si sumar o restar
un valor a la variable en cada iteración.
Ejemplos (Realizaremos los mismos de while con for):

*/
for (let i = 0; i < 5; i++) {
    console.table("El valor de i es:" + i);
}
/*
    El valor de i es 0
    El valor de i es 1
    El valor de i es 2
    El valor de i es 3
    El valor de i es 4
*/
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
/*

    El valor de i es 10
    El valor de i es 9
    El valor de i es 8
    El valor de i es 7
    El valor de i es 6
    El valor de i es 5
    El valor de i es 4
    El valor de i es 3
    El valor de i es 2

*/

// LISTAS
/*
    ARRAYS: Son listas de elementos o datos, en js podemos tener listas o arreglos de diferentes tipos de datos
    EJEMPLO:
*/
const array = ["Felipe", 3212439492, "Masculino", "Mayor de edad"];

/*
    OBJETOS: Son listas de elementos o datos, PERO cada uno de estos tiene un nombre claro o identificador, en js podemos tener listas o arreglos de diferentes tipos de datos
    EJEMPLO:
*/
const obj = {
    nombre: "Felipe",
    telefono: 3212439492,
    genero: "Masculino",
    persona: "Mayor de edad"
};

/*
    EL DECIDIR USAR UN OBJETO O UN ARREGLO DEPENDERÁ DE LA INTENCIÓN CON LA QUE CREES LA LISTA, AHORA BIEN, SE PUEDEN MEZCLAR, 
    ES DECIR, SE PUEDEN CREAR OBJETOS QUE CONTENGAN ARREGLOS Y ARREGLOS QUE CONTENGAN OBJETOS. SEGUN SE REQUIERA.

*/

// CREAREMOS UNA FUNCION QUE RECIBA UN ARREGLO COMO PARAMETRO E IMPRIMA EL PRIMER VALOR O DATO DE LA LISTA,
//  RECORDAR QUE EMPEZAMOS A CONTAR EN CERO

function imprimirArrayIndiceA(arr) {
    console.log(arr[0]);
}
imprimirArrayIndiceA([123, "Felipe"]);

// CREAREMOS UNA FUNCION QUE RECIBA UN ARREGLO COMO PARAMETRO E IMPRIMA TODOS LOS ELEMENTOS DE LA LISTA
function imprimirTodo(arra) {
    // Realizamos un for el cual se ejecute siempre y cuando el contador sea menor a la longitud de elementos del arreglo o lista
    for (let i = 0; i < arra.length; i++) {
        // Al imprimir el arreglo y el contador mostrará cada item del arreglo o lista
        console.log(arra[i]);

    }
    // console.log(arra[0]);
}
imprimirTodo([123, "Felipe", false, "Masculino"]);


// CREAREMOS UNA FUNCION QUE RECIBA UN OBJETO COMO PARAMETRO E IMPRIMA TODOS LOS ELEMENTOS DE LA LISTA

const objeto = {
    Dispositivo: "Tablet",
    Marca: "ASUS",
    Precio: 600000,
}

function imprimirTodoObj(objeto) {
    const arregloO = Object.values(objeto);
    for (let i = 0; i < arregloO.length; i++) {
        // Al imprimir el arreglo y el contador mostrará cada item del arreglo o lista
        console.log(arregloO[i]);

    }

}
imprimirTodoObj(objeto);

// OTRA OPCIÓN

var pc = {
    marca: "lenovo",
    modelo: "laptop",
    año: 2016
};
function objeto00(object) {
    for (var item in object) {
        console.log(object[item]);
    }
}
objeto00(pc);

/*
CONDICIONALES: IF - SWITCH

IF (ELSE ELSEIF) : NOS PERMITE HACER VALIDACIONES A DIFERENTES VARIABLES O DATOS DE SER NECESARIO

EJEMPLO*/


const tipoSuscripcioni = "Premium";
if (tipoSuscripcioni == "Basic") {
    console.log("Solo puedes acceder a entrenar 3 días a la jornada en una jornada elegida");
}
else if (tipoSuscripcioni == "Premium") {
    console.log("Puedes acceder a todas las sesiones que consideres necesario en una jornada elegida");
}
else if (tipoSuscripcioni == "Gold") {
    console.log("Puedes acceder a todas las sesiones que consideres necesario en la jornada que desees");
}

// REPLICAR EL EJERCICIO ANTERIOR UTILIZANDO SÓLO  IF ->

function tipoSuscripcionIf(plan){
    if (plan == "Basic") {
        console.log("Solo puedes acceder a entrenar 3 días a la jornada en una jornada elegida");
        return;
    }
    
    if (plan == "Premium") {
        console.log("Puedes acceder a todas las sesiones que consideres necesario en una jornada elegida");
        return;
    }
    
    if (plan == "Gold") {
        console.log("Puedes acceder a todas las sesiones que consideres necesario en la jornada que desees");
        return;
    }
    console.warn("Dicho plan no existe")
}

// REPLICAR EL EJERCICIO ANTERIOR UTILIZANDO ARRAYS U OBJETOS Y UN SÓLO  IF ->

// const tipoSuscripciones = ["Basic", "Premium" , "Gold"];
const tipoSuscripciones = {
    Basic:"Solo puedes acceder a entrenar 3 días a la jornada en una jornada elegida",
    Premium:"Puedes acceder a todas las sesiones que consideres necesario en una jornada elegida",
    Gold : "Puedes acceder a todas las sesiones que consideres necesario en la jornada que desees"
};

function CtipoSuscripcionOBJ(suscripcion){
    if (tipoSuscripciones[suscripcion]) {
        console.log(tipoSuscripciones[suscripcion]);
        return;
    }
    console.warn("Dicho plan no existe")
}

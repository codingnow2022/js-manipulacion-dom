// A mi me gusta usar la extension Go Live del VSCode asi ya no estar recargando la pagina cada rato sino solo se actualiza
// Eso y que además te permite ver los cambios de tu trabajo en tiempo real desde el celular (que esté conectado a la misma red wifi):
// -abre cmd escribe ipconfig + enter, ahí sale la ipv4.
// -esa dirección se pone en el navegador del celular + el puerto que te abre live server (5500) + el nombre de tu archivo html, quedando algo asi:
// xxx.xxx.xxx.x:5500/miArchivo.html
// donde las x son la ipv4.



// ---------------------------------------------------

/*
    EXPLICAR QUE LOGICAMENTE EL CODIGO NO SE ESCRIBE EN LA CONSOLA
    EXPLICAR COMO SE INSERTA JS EN HTML CON <SCRIPT>
    EXPLICAR QUE POR BUENAS PRÁCTICAS HTML Y JS DEBEN ESTAR POR SEPARADO 
    EXPLICAR ENLACE DE HTML + JS CON <SCRIPT SRC="">
    TODO LO ANTERIOR CON HELLO, WORLD


    EL DOM:

    Que es el DOM? (Document Object Model. por sus siglas en inglés)

    El DOM es una representación del documento HTML como un grupo de nodos y objetos. 
    Determinando así la forma en la cual se puede acceder y modificar la estructura,
     contenido y estilo de un documento HTML DESDE EL JS. En palabras mas sencillas el DOM le dice 
     a un programa como JavaScript que nodo o parte del HTML esta leyendo 
     (como puede ser un párrafo o un titulo o una sección, etc.) y es el mismo DOM el 
     que modela como un objeto (con sus propiedades y métodos) esa parte del documento.
      Con JS se accede a esas propiedades y se invoca esos métodos para modificar, eliminar, 
      crear, etc. elementos en una pagina web.

    Por lo menos esa es la forma en la cual lo entiendo por ahora. Lo comparto porque me parece 
    Importante y quizá alguien mas tenga la duda.
    Pueden encontrar una definición formal y mejor estructurada en:
    https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction

    Si alguien tiene una mejor explicación le agradecería la pueda compartir, para ayudar a entender 
    mejor de que nos hablan cuando mencionan el DOM.



    Para poder invocar o seleccionar un elemento html desde un archivo js debemos usar las funciones:
    -document.querySelector -> Se utilizar para seleccionar todas las etiquetas del documento html o clases de las etiquetas
                                Ej de funciones para capturar elementos: 
                                document.getElementById(); ->selecciona un elemento por su id
                                document.querySelectorAll('p'); -> Seleccion todos los elementos que compartan dicha etiqueta, clase o id
                                document.querySelector('h1'); -> selecciona cualquier elemento segun lo que se ponga en el parentesis
                                document.querySelector('.parrafo'); -> selecciona cualquier elemento segun lo que se ponga en el parentesis
                                document.querySelector('#parrafoId'); -> selecciona cualquier elemento segun lo que se ponga en el parentesis
                                document.querySelector('input'); -> selecciona cualquier elemento segun lo que se ponga en el parentesis
*/


// LEYENDO HTML DESDE JAVASCRIPT

const h1 = document.querySelector('h1');
const parrafo = document.querySelector('.parrafo');
const parrafoId = document.querySelector('#parrafoId');
const input = document.querySelector('input');

// console.log(h1);

console.log({
    h1,
    parrafo,
    parrafoId,
    input,
});
// AL EJECUTAR LA ACCIÓN ANTERIOR PODREMOS OBSERVAR AL DETALLE CADA UNA
// DE LAS OPCIONES (PROPIEDADES O CARACTERÍSTICAS) QUE TIENE CADA ELEMENTO HTML

// PUEDO EXPLICAR ALGUNAS DE ESAS PROPIEDADES COMO CSS O VALUE EN EL CASO DE LOS FORMULARIOS


// ------------------------------------------------------------

// ESCRIBIENDO HTML DESDE JAVASCRIPT 
// SEGUIREMOS USANDO LAS VARIABLES CREADAS ANTERIORMENTE

h1.innerHTML = 'Felipe <br> Restrepo'; // El innerHTML es una propiedad que permite cambiar el 
// contenido html de una etiqueta, incluso se pueden agregar etiquetas html como <br> etc
parrafo.innerText = "Hey you mother fucker";// El innerText es una propiedad que permite cambiar el contenido de texto de una etiqueta

// AGREGAR CLASES A UNA ETIQUETA DE HTML CON JS, PRIMER OPCIÓN attribute->

// getttribute nos sirve para consultar los atributos de una etiqueta, por ejemplo sus clases
h1.getAttribute('class');
console.log(h1.getAttribute('class'));
// setAtributte nos sirve para agregar atributos a los elementos html, por ejemplo clases
h1.setAttribute('class', 'Guayaba');

// AGREGAR CLASES A UNA ETIQUETA DE HTML CON JS, SEGUNDA OPCIÓN classList->
h1.classList.add('pepito');
h1.classList.remove('Guayaba');
// AGREGAR VALORES A LOS INPUTS
input.value = "PEPITO PEREZZZZ";
// CREAR ELEMENTOS HTML DESDE JS , CREAMOS UNA IMG, CREAMOS EL ATRIBUTO SRC Y LE AGREGAMOS LA RUTA DE LA IMG
const img = document.createElement('img');
img.setAttribute('src', 'https://yt3.ggpht.com/Pc2_gaWjkgbgerChuj1H_-wk_mKSN_8rf4iOx9FJI4zH9CnQ5iq20T0lYNFoU3pcphkHkGubTkA=s600-c-k-c0x00ffffff-no-rj-rp-mo')
// img.src = "logo.jpg";
// console.log(img);
// AGREMOS LA IMAGEN DENTRO DE UN CONTENEDOR YA EXISTENTE, ES ESTE CASO UN PARRAFO con la función append
parrafoId.innerHTML= "";
parrafoId.append(img);






//ejercicio 1
//Añadir una función javascript para que al pulsar el botón cambiar este título se convierta en Hola Mundo con Javascript . El unico cambio necesario es el bloque con el texto cambiar y  completar la función cambiar() que aparece en el código de la página.

// function cambiar(){

//     let titular = document.getElementById('titular');
//     titular.innerText = "Hola Mundo con Javascript"; //cambiar el texto original por ese

//  }


//==================================================================================================
//==================================================================================================
//==================================================================================================


//ejercicio 2
//El bloque cambiar acepta el click, el color del titular cambia a rojo y queda centrado
// function cambiar() {
//     let titular = document.getElementById('titular');
//     titular.style.color = "red"; //cambia el color
//     titular.style.textAlign = "center"; //alinea al centro
// }


//==================================================================================================
//==================================================================================================
//==================================================================================================


//ejercicio 3
//Escribe un script de nombre creaDiv() que crea un nuevo bloque div en la página modelo. El bloque se creará al pulsar el botón con texto Crear, sus colores serán texto blanco con fondo rojo y el texto quedará centrado. Este texto consiste en la cadena  Javascript permite crear páginas dinámicas.
//El botón ya existe solo es necesario escribir la función, procurando usar los métodos de document para crear nodos.

// function crearDiv() {
//     let creaDiv = document.createElement('div');
//     let crearP = document.createTextNode("Javascript permite crear páginas dinámicas.");
//     creaDiv.appendChild(crearP);
//     document.body.appendChild(creaDiv);
//     creaDiv.style.color = "white";
//     creaDiv.style.backgroundColor = "red";
//     creaDiv.style.textAlign = "center";
// }


//==================================================================================================
//==================================================================================================
//==================================================================================================


//ejercicio 4
//En la página web modelo debes lograr que al pulsar el botón con el texto borrar se deberá eliminar el bloque que aparece bajo el titular, no ocultar, sino borrarlo. Para detalles mira el código fuente de la página. Solo tienes que escribir el código de la función borrar()

//Al pulsar el botón el subtítulo debe dejar de existir en el código de la página. No deb producirse error al volver a pulsar el botón.

// function borrarDiv(){
//     let element = document.getElementById('subtitulo')
//     element.remove();
// }


//==================================================================================================
//==================================================================================================
//==================================================================================================


//ejercicio 5
//La página web modelo contiene tres imágenes. Cada imagen está en un bloque figure con un elemento figcaption para un pie de foto. Al pulsar sobre cualquier imagen se debe mostar su atributo alt en su pie de foto. Si el pie ya está relleno se borrará su contenido y no se escribirá nada.
//Cada imagen es como un botón que alterna el pie de foto entre vacio (sin texto) y el valor del atributo alt de cada una.

// function ponerPie(this){
//     let img = document.getElementById(this);
//     img.getAttribute("alt");

// }
//document.querySelector()  / querySelectorAll()   -- PARA SELECCIONAR ELEMENTOS DEL HTML. 
// function ponerPie(img){
//     let figcapt = img.querySelector('figcaption'); //getElementsByTagName devuelve un array con todos los tags
//     console.log(figcapt);
//     let images = img.getElementsByTagName('img')[0];
//     if(figcapt.innerText == ""){
//         figcapt.innerText = images.alt;
//     }else{figcapt.innerText = ""}
// }



// let a = document.querySelector();
// console.log(console);
// console.log(a);


//==================================================================================================
//==================================================================================================
//==================================================================================================


//ejercicios 6
// En este script debes leer todos los elementos tipo imagen de la página y mostrar sus urls en un bloque tipo div cuyo id es fuentes y que ya existe en la página modelo usada para estos ejercicios. El script se ejecutará al pulsar el botón con el texto fuentes

// El bloque ya está creado solo tienes que crear la función denominada fuentesImg() asociada al botón fuentes

// function fuentesImg(){
//     let theDiv = document.getElementById('fuentes');
//     let imgUrl = document.querySelectorAll('img');
//     console.log(imgUrl);
//     // let imgUrl = document.getAttribute("src")
//     theDiv.textContent = imgUrl
//     // console.log(a);
// }

function fuentesImg(){
    var listaImgs = document.getElementsByTagName('img');
    //O: listaImgs = document.Images;
    var salida = document.getElementById('fuentes');
    var ind;
    for(ind = 0; ind <listaImgs.length; ind++){
        salida.innerHTML += listaImgs[ind].src+"<br>";
       }
    }
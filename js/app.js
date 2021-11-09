" use strict";
/**
 * array.push() carga un elemento en un array
 */

let numeros = [];
let interruptor = true;  //variable echa (suich)  solo hace algo mientras esta encendido

const init = () =>{
    // nodos
    let form = document.querySelector(".form-floating");
    let input = document.querySelector("#floatingInputValue");
    let output = document.querySelector(".salida");  //es la segunda etiqueta article
    let ul =null;   //uso mas veces 
    let success = document.querySelector(".alert-success");   //esto es para cargarse el array (borrarlo)
    let btnBorrar = document.querySelector(".btn-secondary");

    // cargo el array primero
    success.innerHTML = `Array[${numeros}]`;


    // funciones          creada sin necesidad de que esté en el html. de manera nueva
    const crearUl = () => {        //creado para ul, necesito que este definida fuera
        ul = document.createElement("ul");
        ul.className = "lista";
        output.appendChild(ul);
    }

    const crearLi = (valor) =>{   //creación de función para li
        const li = document.createElement("li");  // solo va a ocurrir del tro de la función 
        li.innerHTML = valor;
        ul.appendChild(li);  
    }


    const deleteLi = () => {  //esto es para poder borrar el array
         numeros = [];
         success.innerHTML = `Array[${numeros}]`;
         if(ul!==null){   // si es diferente a null, borra los li para que quede en blanco
            ul.innerHTML= "";  
         }
         
    }

    // eventos
    form.addEventListener(    //esto es del formulario (boton)
       "submit",
        (ev) =>{  //se puede sacar los parentesis donde solo hay un parametro
            ev.preventDefault();
            const number = Number(input.value);
            numeros.push(number);

            if(interruptor===true){  //para que solo haga un ul en el html
                interruptor=false;
                crearUl();
            }
            crearLi(number);
            success.innerHTML = `Array[${numeros}]`;  //puedo ver lo que hay en el array
        }
    );

    //   borrar el array
    btnBorrar.addEventListener(
           "click",
           deleteLi
       );

}





// el evento load se dispara cuando toda la pag ha terminado de cargar. para que se ejecute js desde arriba
window.addEventListener(
    "load",
    init
);
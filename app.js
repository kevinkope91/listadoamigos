// Array Listado
let listado = [];

// Captura del input
let dato = document.getElementById("amigo");

// Captura Listado Amigos

let listaAmigos = document.getElementById("listaAmigos");

// Captura Listado Sorteo

let sorteo = document.getElementById("resultado");

// Funcion Sorteo
function sortearAmigo(){
    limpiarListado();
    let random = Math.floor(Math.random()*listado.length)
    let li = document.createElement("li")
    li.textContent = `Ganador Sorteo: ${listado[random].toUpperCase()}`;
    sorteo.appendChild(li)
    listado = [];
}

// Funcion limpiar y agregar amigos

let addAmigos = ()=>{
    limpiarListado();
    sorteo.innerHTML = "";
    for(let i=0; i < listado.length;i++){
        let li = document.createElement("li");
        li.textContent = listado[i].toUpperCase();
        li.classList.add("usuario")
        listaAmigos.appendChild(li)
        

    }
}

// Funcion limpiar input

let clearInput = ()=>{
    dato.value = "";
}


// Funcion limpiar listado

function limpiarListado(){
    listaAmigos.innerHTML = "";
}
//Funcion agregar amigo loco

function agregarAmigo(){
    if(dato.value != ""){
        listado.push(dato.value);
        clearInput();
        addAmigos();

    }else{
        alert("No ha ingresado nombre alguno!!")
    }

}
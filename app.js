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
    let random = Math.floor(Math.random()*listado.length)
    let li = document.createElement("li")
    li.textContent = listado[random]
    sorteo.appendChild(li)
}

// Funcion limpiar y agregar amigos

let addAmigos = ()=>{
    listaAmigos.innerHTML = "";
    for(let i=0; i < listado.length;i++){
        let li = document.createElement("li");
        li.textContent = listado[i];
        listaAmigos.appendChild(li)

    }
}

// Funcion limpiar input

let clearInput = ()=>{
    dato.value = "";
}

//Funcion agregar amigo

function agregarAmigo(){
    if(dato.value != ""){
        listado.push(dato.value);
        clearInput();
        addAmigos();

    }else{
        alert("No ha ingresado nombre alguno!!")
    }

}
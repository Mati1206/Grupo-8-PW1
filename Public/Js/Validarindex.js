const usuarioindex= document.getElementById('usuarioindex').value
const contraseñaindex= document.getElementById('contraseñaindex').value
let nombre= window.localStorage.getItem('lst');
document.querySelector('#formulario').innerHTML=nombre;

function ejecutar(){ 

    console.log(nombre[1])
}



// creo en la etiqueta H1 un id= "usuario"

// document.getelementbyid("usuario").innerhtml=localstorage.lts.usario;
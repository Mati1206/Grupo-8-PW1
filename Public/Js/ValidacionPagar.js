'use strict';
const btnPagar = document.querySelector('#btn-Pagar');


let validar = () =>{

    let inputsRequeridos = document.querySelectorAll('#campos_pagar [required]');
    let error = false;

    for(let i = 0 ; i<inputsRequeridos.length ; i++){
        if(inputsRequeridos[i].value == ''){
            inputsRequeridos[i].classList.add('input-error')
            error= true;
        } else {
            inputsRequeridos[i].classList.remove('input-error');
        } 
    }

        if(new Date(Venc.value) < new Date()){
            Venc.classList.add('input-error');
            error= true;
        }

        if(Number(codSeguridad.value)== '000' || Number(codSeguridad.value)== '999' || Number(codSeguridad.value.length) > '3' ){
            codSeguridad.classList.add('input-error');
            error= true;
        }

           
        if ( Number(nroTarj.value.length) != 16 ) {
            
            nroTarj.classList.add('input-error');
            error= true;
          }


    return error;
};

let obtenerDatos = () =>{
    let error = validar();

    if(error){
        alert("Datos erroneos");
    }else {
        alert("Tu pago se realizo con exito");
        window.location.href="../Vista/Home.html";
    }

};

btnPagar.addEventListener('click',obtenerDatos);


const nombreUsuario= document.getElementById('nombreUsuario'); 
let usuario= JSON.parse(localStorage.getItem("usuario")); 

nombreUsuario.innerHTML=usuario.nombre; 
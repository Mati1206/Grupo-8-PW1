'use strict';
//------------validacion nombre se usuario -------------------//

const nombreUsuario= document.getElementById('nombreUsuario'); 
let usuario= JSON.parse(localStorage.getItem("usuario")); 
nombreUsuario.innerHTML=usuario.nombre; 

//------------validacion nombre se usuario -------------------//



function validarOpcionElegida() {
    var opciones = document.getElementsByName('Elegir_Plan');
    var planElegido = false;

    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            planElegido = true;
            alert('Has elegido el plan: ' + opciones[i].value);
            
            
            if(opciones[i].value==='Individual'){
                window.location.href="../Vista/vistapagar.html";
                
            } else if (opciones[i].value === 'Duo'){
                window.location.href="../Vista/vistaPagarDuo.html";
                
            }else if (opciones[i].value==='Familiar'){
                window.location.href="../Vista/vistaPagarFamiliar.html";
                
            }
            
           
        }
    }

    if (!planElegido) {
        alert('Por favor, selecciona un plan antes de avanzar.');
    }

    return planElegido;
    
}

document.getElementById('btn-Pagar').addEventListener('click', function () {
    validarOpcionElegida();
});



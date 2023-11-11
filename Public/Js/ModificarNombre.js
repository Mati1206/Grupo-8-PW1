const nombreUsuario= document.getElementById('nombreUsuario'); 
let usuario= JSON.parse(localStorage.getItem("usuario")); 

nombreUsuario.innerHTML=usuario.nombre; 
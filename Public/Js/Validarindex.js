if (!localStorage.getItem('users')) {
    localStorage.setItem('users', '[]');    
}

let users = JSON.parse(localStorage.getItem('users'));


var sesion = false;

function validarLogin(){

    let usuarioindex= document.getElementById('usuarioindex').value;
    let contraseñaindex= document.getElementById('contraseñaindex').value;

    users.forEach(user => {

        if (user.nombre === usuarioindex && user.contraseña === contraseñaindex) {
            localStorage.setItem("usuario", JSON.stringify(user));
        
            window.location.href = 'Vista/Home.html';
            sesion = true;
            localStorage.setItem("Sesion", "true");
        }
    });
    if(!sesion) alert("Usuario o contraseña incorrectos");
    
}
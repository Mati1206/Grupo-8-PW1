const formulario=document.getElementById('formulario');
const inputs= document.querySelectorAll('#formulario input');
const usuario= document.getElementById("usuario");
const contraseña=document.getElementById("contraseña");
const button=document.getElementById("button");
const users = JSON.parse(localStorage.getItem('users'));
const user = JSON.parse(localStorage.getItem('usuario'));



const expresiones={ 
    usuario: /^[a-zA-Z0-9\_\-]{6,16}$/,
    contraseña: /^[a-zA-Z0-9\_\-]{6,16}$/,  
    contraseña2: /^[a-zA-Z0-9\_\-]{6,16}$/,  
    correo: /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-])+@([a-zA-Z0-9-])+(.[a-z])+(?:\.[a-zA-Z0-9-]+)*$/,
}

const validar= (e)=> { 
switch (e.target.name){ 
    case "usuario":
        if(expresiones.usuario.test(e.target.value)){ 
       
            error1.innerText="Usuario correcto"
            

        }else { 
            document.getElementById('error1').innerText="Nombre de usuario incorrecto";
        }
        break;
        case "contraseña":
            if(expresiones.contraseña.test(e.target.value )){ 
       
                error2.innerText="Contraseña correcto"
                
    
            }else { 
                document.getElementById('error2').innerText="contraseña incorrecta";
            }
        break;
        case "contraseña2":
            const validar2 =()=> { 
            const c1=document.getElementById('contraseña');
            const c2 =document.getElementById('contraseña2');
            if (c1.value!==c2.value){ 
                error3.innerText="Todo bien"
            } else { 
                error3.innerText="nopi"
            }
        }
        break;
        case "fecha":
        if(fecha.value==="") {
            error4.innerText="fallo"
        }
        break;
        case "correo":
            if(expresiones.correo.test(e.target.value )){ 
       
                error5.innerText="correo electronico correcto"
                
    
            }else { 
                document.getElementById('error5').innerText="correo electronico incorrecta";
            }
            break;
}

}

inputs.forEach((input)=> { 
    input.addEventListener('keyup', validar);
    input.addEventListener('blur', validar);
    })


 formulario.addEventListener('submit',(e)=>{ 
    
    e.preventDefault();
     
    enviarformulario();

});

function enviarformulario(){ 
     
    let usuario= document.getElementById("usuario").value
    let contraseña=document.getElementById("contraseña").value
    let contraseña2=document.getElementById("contraseña2").value
    let fecha=document.getElementById("fecha").value
    let correo=document.getElementById("correo").value
    
    const user = {
        nombre: usuario,
        contraseña:contraseña,
        contraseña2:contraseña2,
        fecha: fecha,
        correo: correo,
    };

    
    if(user.nombre === ""|| user.contraseña==="" || user.contraseña2===""
     || user.correo==="" || user.fecha===""){ 
        alert("Faltan completar datos");
    } else { 
        
        localStorage.setItem("usuario", JSON.stringify(user));
        
        processData(user);
        alert("Registro exitoso");
        window.location.href = "../../index.html";
    }
   
 
}

function processData(user){
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}
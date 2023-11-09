const formulario=document.getElementById('formulario');
const inputs= document.querySelectorAll('#formulario input');
const usuario= document.getElementById("usuario")
const contraseña=document.getElementById("contraseña")
const button=document.getElementById("button")
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
    e.preventDefault()

});

function enviarformulario(){ 
     
    let usuario= document.getElementById("usuario").value
    let contraseña=document.getElementById("contraseña").value
    let contraseña2=document.getElementById("contraseña2").value
    let fecha=document.getElementById("fecha").value
    let correo=document.getElementById("correo").value
    
    
    lst= [{
        usuario: usuario,
        contraseña:contraseña,
        contraseña2:contraseña2,
        fecha: fecha,
        correo: correo,
    }]
    if(usuario===""|| contraseña==="" || contraseña2==="" || correo==="" || fecha===""){ 
        alert("Faltan completar datos")
    }else { 
        alert("Registro exitoso") 
        window.location.href = "../index.html"
        window.localStorage.setItemlst= ("lista",JSON.stringify(lst))
        lst=JSON.parse(localStorage.getItem("lista"))        
        document.querySelector('#formulario').innerHTML=lst.usuario.value;
        
    }
   
 
}
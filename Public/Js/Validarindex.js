const usuarioindex= document.getElementById('usuarioindex').value
const contraseñaindex= document.getElementById('contraseñaindex').value



function ejecutar(){ 
    usuarioindex.innerHTML=localStorage.lst
    console.log(usuarioindex);
    console.log(localStorage.lst)
if(usuarioindex.value== localStorage.lst.usuario) { 
    alert("ok")
    
    window.location.href="../Grupo-8-PW1/Vista/Home.html"
    
}
}

// creo en la etiqueta H1 un id= "usuario"

// document.getelementbyid("usuario").innerhtml=localstorage.lts.usario;
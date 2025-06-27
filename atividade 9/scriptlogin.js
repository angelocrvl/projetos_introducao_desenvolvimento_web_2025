let entrar = document.getElementById("entrar");
let usuario = document.getElementById("usuario");
let senha = document.getElementById("senha");


entrar.addEventListener('click', () => {
    if(usuario.value == "admin" && senha.value == "admin"){
        window.location.href = "index.html";

    }
    else if (usuario.value == ""){
        alert("Usuário inexistente");
    }
    else if (senha.value == ""){
        alert("Senha inexistente");
    }
    else if (usuario.value != "admin"|| senha.value != "admin"){
        alert("Usuário ou senha incorretos");
    }
   
})
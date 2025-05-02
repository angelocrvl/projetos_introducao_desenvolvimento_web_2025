function obrigatorionome(){
    document.getElementById("nome").style.borderColor = "red";
}

function obrigatoriomail(){
    document.getElementById("email").style.borderColor = "red";
}

function obrigatoriomsg(){
    document.getElementById("msg").style.borderColor = "red";
}

function envio(){
    let nome = document.getElementById("nome");
    let mensagem = document.getElementById("msg");
    let email = document.getElementById("email");
    let erronome = document.getElementById("namae");
    let erromail = document.getElementById("mail");
    let erromsg = document.getElementById("msgem");

    if(nome.value == ''){
        alert("Campo de nome deve ser preenchido");
        erronome.innerHTML = "Campo a ser preenchido:";
        obrigatorionome();
    }else if(email.value ==''){
        alert("Campo de E-mail deve ser preenchido");
        erromail.innerHTML = "Campo a ser preenchido:";
        obrigatoriomail();
    }else if(mensagem.value ==''){
        alert("Campo de mensagem deve ser preechido");
        erromsg.innerHTML = "Campo a ser preenchido:";
        obrigatoriomsg();
    }else{
        alert("Mensagem enviada com sucesso!");
    }

}

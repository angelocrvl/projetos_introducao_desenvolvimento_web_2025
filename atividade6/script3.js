function resposta(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let resposta = document.getElementById("resultado");
    let soma = 0

    soma = numero1 + numero2;    

    resposta.innerHTML = "a soma é " + soma;
}
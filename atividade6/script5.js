function resposta(){
    let metro = parseInt(document.getElementById("metro").value);
    let resposta = document.getElementById("resultado");
    let cent = 0;

    cent = metro*100;

    resposta.innerHTML = "a distância em centímetros é " + cent;
    
}
function resposta(){
    let tempC = parseInt(document.getElementById("tempC").value);
    let resultado = document.getElementById("resultado");
    let tempF = 0;

    tempF= (tempC*9/5)+32;

    resultado.innerHTML = "o valor em fahrenheit é " + tempF;
}
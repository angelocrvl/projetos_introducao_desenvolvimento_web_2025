function resposta(){
    let tempF = parseInt(document.getElementById("tempF").value);
    let resultado = document.getElementById("resultado");
    let tempC = 0;

    tempC = 5*((tempF-32)/9);

    resultado.innerHTML = "o valor em celsius é " + tempC;

}
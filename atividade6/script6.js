function resposta(){
    let raio = parseInt(document.getElementById("raio").value);
    let resposta = document.getElementById("resultado");
    let area = 0;

    area = 3.14*(raio*raio);

    resposta.innerHTML = "a área é " + area;

}
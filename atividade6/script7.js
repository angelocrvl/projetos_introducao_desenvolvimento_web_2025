function resposta(){
    let lado = parseInt(document.getElementById("lado").value);
    let respArea = document.getElementById("resultado");
    let respDobro = document.getElementById("resultado2");
    let area = 0;
    let dobro = 0;

    area = lado*lado;

    dobro = area*2;

    respArea.innerHTML = "a área é " + area;
    respDobro.innerHTML = "e o dobro é " + dobro;

}
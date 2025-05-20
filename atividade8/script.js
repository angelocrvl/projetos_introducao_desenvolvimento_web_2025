
function calculoTMB() {
    let nome = document.getElementById("nome").value;
    let sexo = document.getElementById("sexo").value;
    let TMB = parseFloat;
    let peso = parseInt(document.getElementById("peso").value);
    let altura = parseInt(document.getElementById("altura").value);
    let idade = parseInt(document.getElementById("idade").value);
    let taxa = document.querySelector('input[name="nivel"]:checked').value;
    let Agua = parseFloat;
    let PerderPeso = parseInt(document.getElementById("pesoP").value);
    let dia = parseInt(document.getElementById("dias").value);
    let Gperda = (PerderPeso * 7700) / dia;
    let distcaminhada = parseFloat(document.getElementById("dist").value);
    let resultado1 = document.getElementById("resultado1");
    let resultado2 = document.getElementById("resultado2");
    let Gcaminhada = peso * distcaminhada;

    if (sexo == "masculino") {
        TMB = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
        let Gcalorico = TMB * taxa;
        Agua = 0.035 * peso;

        resultado2.innerHTML = "o resultado da TMB é: " + TMB;
        resultado3.innerHTML = "o gasto calórico diário total é " + Gcalorico;
        resultado4.innerHTML = "a quantidade ideal de água diária é " + Agua;
    } if (sexo == "feminino") {
        TMB = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
        let Gcalorico = TMB * taxa;
        Agua = 0.035 * peso;

        resultado2.innerHTML = "o resultado da TMB é: " + TMB;
        resultado3.innerHTML = "o gasto calórico diário total é " + Gcalorico;
        resultado4.innerHTML = "a quantidade ideal de água diária é " + Agua;
    }


    resultado7.innerHTML = "o déficit calórico necessário para perder " + PerderPeso + "kg em " + dia + "dias é de " + Gperda + "Kcal";
    resultado6.innerHTML = "o gasto calórico numa caminhada de " + distcaminhada + "km " + "é de " + Gcaminhada + "kcal";
    resultado1.innerHTML = "nome do cliente: " + nome;

}


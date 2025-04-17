function resposta(){
    
    let horas = parseInt(document.getElementById("horas").value);
    let mes = parseInt(document.getElementById("mes").value);
    let resultado = document.getElementById("resultado");
    let salario = 0;

    salario = horas*mes;

    resultado.innerHTML = "o salário mensal é de " + salario;
}
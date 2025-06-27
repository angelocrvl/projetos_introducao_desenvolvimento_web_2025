let nome = document.getElementById("nome");
let sobrenome = document.getElementById("sobrenome");
let endereco = document.getElementById("endereco");
let telefone = document.getElementById("telefone");
let botaoIncluir = document.getElementById("botaoverde");
let botaoSalvar = document.getElementById("botaoazul");
let botaoEditar = document.getElementById("botaoamarelo");
let botaoExcluir= document.getElementById("botaovermelho");
let botaoCancelar= document.getElementById("botaobranco");
let botaoPretos = document.getElementsByClassName("botoespretos");
let botaoPrimeiro = document.getElementById("botaoprimeiro");
let botaoAnterior = document.getElementById("botaoanterior");
let botaoProximo = document.getElementById("botaoproximo");
let botaoUltimo = document.getElementById("botaoultimo");


nome.disabled = true;
sobrenome.disabled = true;
endereco.disabled = true;
telefone.disabled = true;
botaoSalvar.disabled = true;
botaoEditar.disabled = true;
botaoExcluir.disabled = true;
botaoCancelar.disabled = true;
botaoPretos.disabled = true;

botaoSalvar.style.backgroundColor = "white";
botaoSalvar.style.color = "black";
botaoEditar.style.backgroundColor = "white";
botaoEditar.style.color = "black";
botaoCancelar.style.backgroundColor = "white";
botaoCancelar.style.color = "black";
botaoExcluir.style.backgroundColor = "white";
botaoExcluir.style.color = "black";

let cadastroNome = [];
let cadastroSobrenome = [];
let cadastroEndereco = [];
let cadastroTelefone = [];

let i = 0;
let contEdit = 0;
let contInclude = 0;




botaoIncluir.addEventListener("click", () => {
    if(contInclude == 0){
        nome.disabled = false;
        sobrenome.disabled = false;
        endereco.disabled = false;
        telefone.disabled = false;
        botaoSalvar.disabled = false;
        botaoEditar.disabled = true;
        botaoExcluir.disabled = true;
        botaoCancelar.disabled = false;
        botaoPretos.disabled = false;
        

        botaoSalvar.style.backgroundColor = " #04c9f4";
        botaoSalvar.style.color = "#fff";
        botaoCancelar.style.backgroundColor = "#fff";
        botaoCancelar.style.color = "#04c9f4";
        contInclude++;
    }else{
        nome.value = "";
        sobrenome.value = "";
        endereco.value = "";
        telefone.value = "";

        nome.disabled = false;
        sobrenome.disabled = false;
        endereco.disabled = false;
        telefone.disabled = false;
        
        botaoSalvar.disabled = false;
        botaoEditar.disabled = true;
        botaoExcluir.disabled = true;
        botaoCancelar.disabled = false;
        botaoPretos.disabled = false;
        botaoEditar.style.backgroundColor = "white";
        botaoEditar.style.color = "black";
        botaoExcluir.style.backgroundColor = "white";
        botaoExcluir.style.color = "black";
        botaoCancelar.style.backgroundColor = "#fff";
        botaoCancelar.style.color = "#04c9f4";
        
    }
    
   
    

})
botaoSalvar.addEventListener("click", ()=>{
   
   if(contEdit == 0){
        cadastroNome.push(nome.value);
        cadastroSobrenome.push(sobrenome.value);
        cadastroEndereco.push(endereco.value);
        cadastroTelefone.push(telefone.value);
        i++;
        

        botaoEditar.disabled = false;
        botaoExcluir.disabled = false;
        botaoEditar.style.backgroundColor = " orange";
        botaoEditar.style.color = "white";
        botaoExcluir.style.backgroundColor = "#f40404";
        botaoExcluir.style.color = "white";
        botaoCancelar.style.backgroundColor = "#fff";
        botaoCancelar.style.color = "black";
        botaoCancelar.disabled = true;

        nome.disabled = true;
        sobrenome.disabled = true;
        endereco.disabled = true;
        telefone.disabled = true;

   }else{
        cadastroNome[i] = nome.value;
        cadastroEndereco[i] =  endereco.value;
        cadastroTelefone[i] =  telefone.value;
        cadastroSobrenome[i] =  sobrenome.value;

        botaoEditar.disabled = false;
        botaoExcluir.disabled = false;
        botaoEditar.style.backgroundColor = " orange";
        botaoEditar.style.color = "white";
        botaoExcluir.style.backgroundColor = "#f40404";
        botaoExcluir.style.color = "white";
        botaoCancelar.style.backgroundColor = "#fff";
        botaoCancelar.style.color = "black";
        botaoCancelar.disabled = true;

        nome.disabled = true;
        sobrenome.disabled = true;
        endereco.disabled = true;
        telefone.disabled = true;
        alert("Editado com sucesso!");
        contEdit = 0;
   }

    
    



    

    
})
botaoCancelar.addEventListener("click", () => {
    nome.value = "";
    sobrenome.value = "";
    endereco.value = "";
    telefone.value = "";
    
})
botaoEditar.addEventListener("click", () => {
    nome.disabled = false;
    sobrenome.disabled = false;
    endereco.disabled = false;
    telefone.disabled = false;
    contEdit++;
    
    
})
botaoExcluir.addEventListener("click", () => {
    if(i == cadastroEndereco.length - 1){
        if(confirm("Deseja realmente excluir esse professor?")){
            
            cadastroNome.pop(nome.value);
            cadastroSobrenome.pop(sobrenome.value);
            cadastroEndereco.pop(endereco.value);
            cadastroTelefone.pop(telefone.value);

            nome.value = cadastroNome[i-1];
            sobrenome.value = cadastroSobrenome[i-1];
            endereco.value = cadastroEndereco[i-1];
            telefone.value = cadastroTelefone[i-1];

        }else{

        }    



    }else{
        if(confirm("Deseja realmente excluir esse professor?")){
            nome.value = cadastroNome[i-1];
            sobrenome.value = cadastroSobrenome[i-1];
            endereco.value = cadastroEndereco[i-1];
            telefone.value = cadastroTelefone[i-1];

            while(i<cadastroEndereco.length - 1){
                
                cadastroNome[i] = cadastroNome[i+1];
                cadastroEndereco[i] = cadastroEndereco[i+1];
                cadastroTelefone[i] = cadastroTelefone[i+1];
                cadastroSobrenome[i] = cadastroSobrenome[i+1];
                i++;

            }
            if(i == cadastroEndereco.length -1){
            cadastroNome.pop(nome.value);
            cadastroSobrenome.pop(sobrenome.value);
            cadastroEndereco.pop(endereco.value);
            cadastroTelefone.pop(telefone.value);

            }
        }else{

        }
        

        


    }
    
    
})
botaoPrimeiro.addEventListener("click", () => {
    i = 0;
    nome.value = cadastroNome[0];
    sobrenome.value = cadastroSobrenome[0];
    endereco.value = cadastroEndereco[0];
    telefone.value = cadastroTelefone[0];
})
botaoAnterior.addEventListener("click", () => {
    if(i > 0){
        i--;
        nome.value = cadastroNome[i];
        sobrenome.value = cadastroSobrenome[i];
        endereco.value = cadastroEndereco[i];
        telefone.value = cadastroTelefone[i];

    }
    
})
botaoProximo.addEventListener("click", () => {
    if(i < cadastroEndereco.length - 1){
        i++;
        nome.value = cadastroNome[i];
        sobrenome.value = cadastroSobrenome[i];
        endereco.value = cadastroEndereco[i];
        telefone.value = cadastroTelefone[i];
    }

})
botaoUltimo.addEventListener("click", () => {
    i = cadastroEndereco.length - 1;
    nome.value = cadastroNome[i];
    sobrenome.value = cadastroSobrenome[i];
    endereco.value = cadastroEndereco[i];
    telefone.value = cadastroTelefone[i];

    
   
})


//objeto calculadora
let calculadora = {};
calculadora.display = document.querySelector("#display"); //Colocando na calculadora um display
//Referenciando botões
let botaoUm = document.querySelector("#numeroUm");
let botaoSoma = document.querySelector("#soma");
let botaoIgual = document.querySelector("#igual");
//Variavel que acumula expressões
let acumulador = "";

//Evento de click no botãoUm
botaoUm.onclick = function() {
    calculadora.display.innerText += 1; //Escrevendo no display o número 1 ao ser clickado pelo botãoUm
}

//Evento botão soma
botaoSoma.onclick = function() {
    acumulador += calculadora.display.innerText; //Guardando dentro do acumulador o valor escrito no display
    acumulador += " + "; //Guardando dentro do acumulador o +
    calculadora.display.innerText = ""; //Limpando o display
}

//Evento do botão igual
botaoIgual.onclick = function() {
    //TODO: checar se existe conteúdo dentro do display

    //colocando conteúdo do display no acumulador
    acumulador += calculadora.display.innerText; 
    //resolvendo conta (conteúdo acumulador)
    let resultado = eval(acumulador);
    //colocando no display o conteúdo do acumulador
    calculadora.display.innerText = resultado;
    // limpando o acumulador
    acumulador = "";
    limparDisplay(resultado);
}

function limparDisplay(resultado){
    if(calculadora.display.innerText = resultado){
        console.log("ta sujo, limpa ai");
    }
}

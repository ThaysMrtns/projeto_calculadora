
//objeto calculadora
let calculadora = {};
calculadora.display = document.querySelector("#display"); 
//Referenciando botões
let botaoZero = document.querySelector("#numeroZero");
let botaoUm = document.querySelector("#numeroUm");
let botaoDois = document.querySelector("#numeroDois");
let botaoTres = document.querySelector("#numeroTres");
let botaoQuatro = document.querySelector("#numeroQuatro");
let botaoCinco = document.querySelector("#numeroCinco");
let botaoSeis = document.querySelector("#numeroSeis");
let botaoSete = document.querySelector("#numeroSete");
let botaoOito = document.querySelector("#numeroOito");
let botaoNOve = document.querySelector("#numeroNove");
let botaoSoma = document.querySelector("#soma");
let botaoIgual = document.querySelector("#igual");
//Variavel que acumula expressões
let acumulador = "";
let resultado;


//Evento de click no botãoUm
botaoZero.onclick = function(){
    calculadora.display.innerText +=0;
}
botaoUm.onclick = function() {
    calculadora.display.innerText += 1; 
}
botaoDois.onclick = function(){
    calculadora.display.innerText += 2;
}
botaoTres.onclick = function(){
    calculadora.display.innerText += 3;
}
botaoQuatro.onclick = function(){
    calculadora.display.innerText +=4;
}
botaoCinco.onclick = function(){
    calculadora.display.innerText +=5;
}
botaoSeis.onclick = function(){
    calculadora.display.innerText +=6;
}
botaoSete.onclick = function(){
    calculadora.display.innerText += 7;
}
botaoOito.onclick = function(){  
    calculadora.display.innerText +=8;
}
botaoNOve.onclick = function(){
    calculadora.display.innerText +=9;
}

//Evento botão soma
botaoSoma.onclick = function() {
    acumulador += calculadora.display.innerText; //Guardando dentro do acumulador o valor escrito no display
    acumulador += " + "; //Guardando dentro do acumulador o +
    calculadora.display.innerText = ""; //Limpando o display
 
}

//Evento do botão igual
botaoIgual.onclick = function() {
    //TODO: checar se existe conteúdo dentro do display. pelo visto eu tenho que criar um contador né 
    //colocando conteúdo do display no acumulador
    acumulador += calculadora.display.innerText; 
    //resolvendo conta (conteúdo acumulador)
    resultado = eval(acumulador);
    
    //colocando no display o conteúdo do acumulador
    calculadora.display.innerText = resultado;
    // limpando o acumulador
    acumulador = "";
   // limparDisplay();
}

function limparDisplay(){
    
    
}

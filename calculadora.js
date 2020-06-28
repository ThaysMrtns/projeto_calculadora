
//objeto calculadora
let calculadora = {};
calculadora.display = document.querySelector(".display"); 

//Referenciando botões
let botao = document.querySelectorAll(".btn-num");
let botaoSinais = document.querySelectorAll(".btn-sinais");

//Variavel que acumula expressões
let acumulador = "";
let resultado;

botao[10].onclick = function(){ //Botão 0
    calculadora.display.innerText +=0;
}
botao[0].onclick = function(){  //Botão 1
    calculadora.display.innerText +=1;
}
botao[1].onclick = function() { //Botão 2
    calculadora.display.innerText += 2; 
}
botao[2].onclick = function(){ //Botão 3
    calculadora.display.innerText += 3;
}
botao[3].onclick = function(){ //Botão 4
    calculadora.display.innerText += 4;
}
botao[4].onclick = function(){ //Botão 5
    calculadora.display.innerText +=5;
}
botao[5].onclick = function(){ //Botão 6
    calculadora.display.innerText +=6;
}
botao[6].onclick = function(){ //Botão 7
    calculadora.display.innerText +=7;
}
botao[7].onclick = function(){ //Botão 8
    calculadora.display.innerText += 8;
}
botao[8].onclick = function(){   //Botão 9
    calculadora.display.innerText +=9;
}


//Subtrair
botaoSinais[2].onclick = function(){
    acumulador += calculadora.display.innerText; //Guardando dentro do acumulador o valor escrito no display
    acumulador += " - "; //Guardando dentro do acumulador o -
    calculadora.display.innerText = ""; //Limpando o display
}
//Dividir
botaoSinais[1].onclick = function(){
    acumulador += calculadora.display.innerText; //Guardando dentro do acumulador o valor escrito no display
    acumulador += " / "; //Guardando dentro do acumulador o /
    calculadora.display.innerText = ""; //Limpando o display
}
//Multiplicar
botaoSinais[0].onclick = function(){
    acumulador += calculadora.display.innerText; //Guardando dentro do acumulador o valor escrito no display
    acumulador += " * "; //Guardando dentro do acumulador o *
    calculadora.display.innerText = ""; //Limpando o display
}

//Somar
botaoSinais[3].onclick = function() {
    acumulador += calculadora.display.innerText; //Guardando dentro do acumulador o valor escrito no display
    acumulador += " + "; //Guardando dentro do acumulador o +
    calculadora.display.innerText = ""; //Limpando o display
 
}
//Iigual
botaoSinais[4].onclick = function() {
    //colocando conteúdo do display no acumulador
    acumulador += calculadora.display.innerText; 
    //resolvendo conta (conteúdo acumulador)
    resultado = eval(acumulador);
    
    //colocando no display o conteúdo do acumulador
    calculadora.display.innerText = resultado;
    // limpando o acumulador
    acumulador = "";
}
//Limpar C
botao[12].onclick = function(){
    //colocando no display o conteúdo do acumulador
    calculadora.display.innerText = "";
    // limpando o acumulador
    acumulador = "";
}
//Alterar sinal do número
botao[9].onclick = function(){
    console.log("clickado");
}
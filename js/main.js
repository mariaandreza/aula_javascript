

/*
var nome = "Andreza";
var n1 = 5;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil")); //TROCA DE PALAVRAS 
//console.log(frase.toUpperCase()); *TODAS AS LETRAS MAIUSCULAS
//console.log(frase.toLowerCase()); *TODAS AS LETRAS MINUSCULAS
//alert(frase.replace("Japão", "Brasil"));
*/


/*
//       ARRAY
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));
//alert(lista[1]);
*/


/*
//      DICIONARIO

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);


var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
//      CONDICIONAIS


var idade = prompt("Qual sua idade? ");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/


/* 
//     LAÇOS DE REPETIÇÃO

var count  = 0;
while (count <+ 5){
    console.log(count);
    count = count + 1 ;
};

var count;
for (count=0; count <= 5; count++){
    alert(count);
};
*/


/*
//     DATA

var d = new Date();
alert(d.getMonth()+1);
alert(d.getDate());
alert(d.getDay());
alert(d.getHours());
*/


/*
function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));


function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("vai japão", "japão", "brasil"));

var validar; // global
function validaIdade(idade){
  //  var validar; // da funcao
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/



function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/mariaandreza");
    //window.location.href = "https://github.com/mariaandreza";
}

function trocar(elemento){
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "<b>Passe o mouse aqui</b>";
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";

}

function load(){
    alert("página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


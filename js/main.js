import { calculo } from "./calculo.js";

var botoes = document.querySelector(".calculadora");
var numDisplay = document.querySelector(".display");
var operador = null;
var numero = 0;
var segundoNum = 0;
var clicado;


botoes.addEventListener("click", function(event){

    clicado = event.target.textContent;



    if (clicado === "/" || clicado === "X" || clicado === "-" || clicado === "+") {
        operador = clicado
    } else if (clicado >= 0 || clicado <= 9) {
        
        if (operador == null) {
            numero = parseInt(numero + clicado);
            numDisplay.textContent = numero
        } else {
            segundoNum = parseInt(segundoNum + clicado);
            numDisplay.textContent = segundoNum
        }
    }
    
    if (clicado === "=") {
        //chamar função de calculo
        numDisplay.textContent = calculo(numero, segundoNum, operador)
        numero = numDisplay.textContent
        operador = null
        segundoNum = 0
    }   
    
    if (clicado === "AC") {
        operador = null
        numero = 0
        segundoNum = 0
        numDisplay.textContent = 0
    }







})


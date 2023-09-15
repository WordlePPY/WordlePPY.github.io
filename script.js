let diccionario = ["APPLE", "MOUSE", "WINGS", "YOUTH", "SWO0D"];
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
Math.floor(Math.random() * 10) + 1;
let intentos = 6;

const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);

function intentar(){
    const INTENTO = leerIntento();
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.claassName = "row";

if (INTENTO === palabra){
    terminar("<h1>GANASTE!</h1>")
    return
}

    for (let i in palabra){
        const SPAN= document.createElement("span");
        SPAN.className = "letter";
        if (INTENTO[i]==palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#79b851";
        } else if(palabra.includes(INTENTO[i])){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#f3c237";
        } else{
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = "#a4aec4";
        }
        ROW.appendChild(SPAN);
    }
    
    GRID.appendChild(ROW);
    intentos--
    if (intentos==0){
    terminar("<h1>PERDISTE!</h1>")
    }        
}


function leerIntento(){
    let intento= document.getElementById("guess-input");
    intento= intento.value;
    intento= intento.toUpperCase();
    return intento;
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
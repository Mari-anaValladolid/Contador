//Necesito que este contador haga 3 cosas
//Incremete de 1 en 1
//Decremente de 1 en 1
//Borre toda la cuenta
//Nececesitamos iniciar en 0


var valorContador = 0; //Inicializamos nuestra variable en 0

function incrementar (){
    valorContador++; //incrementar de 1 en 1
    document.getElementById("contador").innerHTML = valorContador; 
}

function decrementar (){
    valorContador--; //decrementar de 1 en 1
    document.getElementById("contador").innerHTML = valorContador;
}

function resetear(){
    valorContador = 0;
    document.getElementById("contador").innerHTML =
    valorContador;
}


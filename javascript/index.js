var Operacion = "";
var NumOperaciones =localStorage.length;
var Num1 = 0.0;
var Num2 = 0.0;
var Result = 0.0;

function SumarNumeros(){
   
    Result = Num1 + Num2;
    document.getElementById("lblResult").innerHTML= "Resultado: " + Result;
    NumOperaciones = NumOperaciones + 1;
    GuardarLocalStorage();
   
}

function RestarNumeros(){
   
    Result = Num1 - Num2;
    document.getElementById("lblResult").innerHTML= "Resultado: " + Result;
    NumOperaciones = NumOperaciones + 1;
    GuardarLocalStorage();
}

function MultNumeros(){
   
    Result = Num1 * Num2;
    document.getElementById("lblResult").innerHTML= "Resultado: " + Result;
    NumOperaciones = NumOperaciones + 1;
    GuardarLocalStorage();
}

function DividirNumeros(){
    Result = Num1 / Num2;
    document.getElementById("lblResult").innerHTML= "Resultado: " + Result;
    NumOperaciones = NumOperaciones + 1;
    GuardarLocalStorage();
}


function SelecSuma(){
    Operacion = "Suma";
    document.getElementById("lblOpeSelec").innerHTML= "Operacion seleccionada: " + Operacion + " (+)";
}
function SelecResta(){
    Operacion = "Resta";
    document.getElementById("lblOpeSelec").innerHTML= "Operacion seleccionada: " + Operacion + " (-)";
}
function SelecMult(){
    Operacion = "Multiplicacion";
    document.getElementById("lblOpeSelec").innerHTML= "Operacion seleccionada: " + Operacion + " (x)";
}
function SelecDivision(){
    Operacion = "Division";
    document.getElementById("lblOpeSelec").innerHTML= "Operacion seleccionada: " + Operacion + " (/)";
}


function VerificarOperacion(){
    Num1 = parseInt(document.getElementById("txtNumero1").value);
    Num2 = parseInt(document.getElementById("txtNumero2").value);

    var Text1 = document.getElementById("txtNumero1").value;
    var Text2 = document.getElementById("txtNumero2").value;

    if(Text1 == "" || Text2 == ""){
        alert("Los campos no pueden estar vacios");

    }else{
        if (Operacion == ""){
            alert("Debe de seleccionar una operacion antes de calcular");
            
        }else{
            if (Operacion == "Suma"){
                SumarNumeros();
                

            }else if(Operacion == "Resta"){
                RestarNumeros();

            }else if(Operacion == "Multiplicacion"){
                MultNumeros();

            }else if(Operacion == "Division"){
                DividirNumeros();
            }
            GuardarLocalStorage();
        } 
    }
}


function GuardarLocalStorage(){
 
    let Operaciones = {
        IdOperacion: NumOperaciones,
        TipoOperacion: Operacion,
        ValNumero1: Num1,
        ValNumero2: Num2,
        valResultado: Result,
    }

    localStorage.setItem("Operacion " + NumOperaciones, JSON.stringify(Operaciones));
    ObtenerLocalStorage()
  
}

function ObtenerLocalStorage(){
     
    console.clear();

    for (i=0; i<=localStorage.length-1; i++) {
        key = localStorage.key(i);
        if(key.indexOf("Operacion ") != -1) {
           console.log(JSON.parse(localStorage.getItem(key)));

        }
    }
}

function BorrarLocalStorage(){
    localStorage.clear();
    console.clear();
    console.log("Se han eliminado todos los datos del local storage");
}

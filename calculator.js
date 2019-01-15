function addition(){

}

function subtraction(){

}

function division(){

}

function multiplication(){

}

function equals(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let addition = document.getElementById("addition").checked;
    let subtraction = document.getElementById("subtraction").checked;
    let division = document.getElementById("division").checked;
    let multiplication= document.getElementById("multiplication").checked;
    let result = 0;

    if (addition == true ){
        result = +number1 + +number2;
    }
    else if (subtraction == true ){
        result = number1 - number2;
    }
    else if (division == true ){
        result = number1 / number2;
    }
    else if (multiplication == true ){
        result = number1 * number2;
    }
    document.getElementById("result").innerHTML = result;
}


function random(){

}
function fizzBuzz(){
    let max = document.getElementById("max").value;
    let num1 = document.getElementById("fizz").value;
    let num2 = document.getElementById("buzz").value;
    for (i=1; i<max; i++){
            if(i % num1 === 0 && i % num2 == 0)
                console.log(i + " FizzBuzz");
            else if (i % num1 == 0)
                console.log(i + " Fizz");
             else if(i % num2 == 0)
                console.log(i + " Buzz");
            else 
                console.log(i + " Go away!");
    }
}
function AgeChecker(){
    let name=document.getElementById("name").value;
    let age= document.getElementById("age").value;
    if (age>20 && age<40) console.log("True");
    else console.log("False");
}
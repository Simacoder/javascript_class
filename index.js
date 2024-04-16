// mixing logical and control flow 

let num1 = 4
let num2 = 6

if (num1 > num2) {
    console.log("The first number is high");
}
else {
    console.log("Second number is high");
}

if ((num1 > num2) && ( 5 < 6)){
    console.log("Both condition are true");
}
else {
    console.log("not both are met");
}
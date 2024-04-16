function count(username){
    // you can call this function before declaration
    console.log('Hi, ' + username);
}
// callng the funcion 
count('Simanga ')

const countToo = function(username) {
    // function expresion 
    // cant call this function before declaration
    console.log('Hi, there ' + username);

}

countToo('Simanga');

const countThree = ()=>  {
    console.log('Hi, Sima');
}

countThree()

const countfour = (a , b) => {
    console.log(a * b);
}

countfour(2, 3)

function addSum(a, b) {
    return a + b
}

let sum = addSum(3,4)
console.log("total: "+ sum);
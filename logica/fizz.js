/*
 1. 100 numeros
 2. crear un bucle que recorra 100 numeros
 si el numero es multiplo de 3, imprime fizz
 3.1 ocupar la expresion numero % 3
 es verdadero e el modulo es = 0
 4. si el multiplo de 5, imprime "Buzz .
 4.1 ocupar las expresion numero % 5
 4.2 es verdadero si el modulo es =0
 5.Si el numero es multiplo de 3 y 5, imprime "FizzBuzz"
 5.1 ocupar la expresion numero % 3 y modulo %5
 5.2 es verdadero solo y solo ambas expresiones son =0
 en caso de nos ser multiplo de ninguno imprime el numero
 " 
*/
let counter = 1;
do {
if(counter % 3 === 0 && counter % 5 === 0) {
    console.log(`El numero es ${counter} es FizzBuzz`);
}
else if( counter % 3 === 0){
console.log (`El numero ${counter} es Fizz`);
}
 else if( counter % 5 === 0){
console.log (`El numero ${counter} es Buzz`);
 }else {
    console.log(counter);
 }
    counter++;
} while (counter<= 100)
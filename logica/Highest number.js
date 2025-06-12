const numeros10 = [];
let counter =0;
alert("Te pediremos 10 numeros y adivinaremos cuales el mayor ")
for (let i=1; i<=10; i++){
    numeros10.push(Number(prompt(`Ingresa el número numero: (${i} de 10)`)));  
    counter++;
} 
let numeroMayor = numeros10.sort((a, b) => b -a);
console.log(numeroMayor[0]);
let numero = prompt("Ingresa un número para calcular su factorial:");
numero = parseInt(numero);

function factorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log("El factorial de " + numero + " es: " + factorial(numero));
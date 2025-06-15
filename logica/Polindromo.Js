let input = prompt("Ingresa una palabra o frase para verificar si es un palíndromo:");

// Función para limpiar el texto
function cleanText(text) {
    return text
        .toLowerCase()                   // convertir a minúsculas
        .replace(/[^a-z0-9]/g, "");      // eliminar todo lo que no sea letra o número
}

// Función para verificar si es palíndromo
function isPalindrome(str) {
    let cleaned = cleanText(str);
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

// Resultado
if (isPalindrome(input)) {
    console.log("Es palíndromo");
} else {
    console.log("No es un palíndromo");
}




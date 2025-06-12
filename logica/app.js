let counter =0;
const usuername = prompt("Hola, ingresa tu nombre de usuario;");
const age = prompt( "Ahora ingresa tu edad:");
const  peliculasFavoritas = [];

for(let i = 1; i <= 5 ; i ++){
    peliculasFavoritas.push(prompt(`Ingresa la pelicula numero ${i}`));
    // equivalente a " ingresa las pelicula numero " +* 1 + ":"

}
console.log (`Hola soy ${usuername} tengo ${age} años y mis peliculas favoritas son:`);

while(counter < peliculasFavoritas.length){
    console.log(`Mi peliculas favorita son ${counter +1} es: ${peliculasFavoritas[counter]}`);
counter++;
}
 
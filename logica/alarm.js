

let miliSegundos =prompt(" Escriba cuantos segundos quieren que pase para que suene la alarma");
let segundos = (miliSegundos * 1000);
console.log(`Tu alarma sonara en ${miliSegundos} segundos`)

setTimeout(()=>{
    console.log("Ya DESPIERTA");
},segundos);


function sumOfReistors( resistorsArrays){
    const resistorsAbs = resistorsArrays.map ((resistor) => Math.abs (resistor));
    const totalResistance = resistorsAbs.reduce((total,current) => total + current,0);
    return `${totalResistance} ohms`

}

sumOfReistors([-1,5,-6,3,-9]);
console.log(sumOfResistors([-1,5,6,3]));
console.log(sumOfResistors([14,3.5,6]));
console.log(sumOfResistors([8,15,100]));
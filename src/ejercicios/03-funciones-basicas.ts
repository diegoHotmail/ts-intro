/*
    ===== Código de TypeScript =====
*/


function sumar (a: number, b:number):number{
    return a + b;
}

const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

function multiplicar (num_1:number, num_2?:number, base:number = 2):number{
    return num_1 * base;
}


const resultado = sumar(10, 20);

console.log(resultado);

const resultado2 = multiplicar(5, 10);

console.log(resultado2);

const resultado3 = multiplicar(5, 0, 10);

console.log(resultado3);





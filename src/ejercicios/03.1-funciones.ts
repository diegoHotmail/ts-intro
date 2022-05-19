/*
    ===== Código de TypeScript =====
*/
function sumar2 (a: number, b:number):number{
    return a + b;
}

const sumarFlecha2 = (a:number, b:number):number => {
    return a + b;
}

function multiplicar2 (num_1:number, num_2?:number, base:number = 2):number{
    return num_1 * base;
}

interface Personaje_2 {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: Personaje_2, curarX):void{

    personaje.pv += curarX;

    console.log(personaje);

    //return undefined; // Es lo mismo que no retornar nada
}

const nuevoPersonaje: Personaje_2 = {
    nombre: 'diego',
    pv: 50,
    mostrarHp () {
        console.log('Puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();





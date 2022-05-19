/*
    ===== Código de TypeScript =====
*/

let habilidades2: (boolean | string | number) [] = ['juan', 'diego', 'elena', 100];

habilidades2.push('paco');{

}

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    pueblo?: string;
}

const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades: ['bash', 'counter' , 'healing']
}

personaje.pueblo = 'Prado';

console.table(personaje);




/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Diego',
}

const pasajero2: Pasajero = {
    nombre: 'Fernando',
    hijos: ['Cristina', 'Maite']
}

function imprimeHijos (pasajero: Pasajero): void {
        // Si la pripiedad es opcional, para que no dé error
        // hay que poner ? a la hora de buscarla. Puede que un objeto no 
        // tenga esa propiedad ya que es opocional.
        const cuantoshijos = pasajero.hijos?.length || 0;
        // Si la propiedad de hijos es indefinido devuelve 0

        console.log(cuantoshijos);
}

imprimeHijos(pasajero2);
imprimeHijos(pasajero1);
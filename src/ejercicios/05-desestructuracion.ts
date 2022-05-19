/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen:  number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
     volumen: 90,
     segundo: 36,
     cancion: 'Mess',
     detalles: {
         autor: 'Juan',
         anio:2015
     }
}

// Desestructuración
//const {volumen, segundo, cancion, detalles:{autor}} = reproductor; // Toma el objeto reproductor y estrae los atributos que le pedimos
const {volumen, segundo, cancion, detalles} = reproductor;
const { autor } = detalles;

// console.log('El volumen actual es de: ' + volumen);
// console.log('El segundo actual es de: ' + segundo);
// console.log('La canción actual es de: ' + cancion);
// console.log('El autor actual es de: '+ autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']; // La posición es importante en los Arrays
const [ p1, p2, p3] = dbz;
//const [ , , p3] = dbz;

console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);
// console.log('Personaje 3:', p3);




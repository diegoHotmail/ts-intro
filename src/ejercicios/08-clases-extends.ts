/*
    ===== Código de TypeScript =====
*/


// class Hero {
//     // private alterEgo: string;
//     // public edad: number;
//     // static nombreReal: number;

//     alterEgo: string;
//     edad: number;
//     nombreReal: number;

//     constructor(alterEgo: string) {
//         this.alterEgo = alterEgo;

//     }
// }

class PersonaNormal {

    constructor(
        public nombre: string,
        public direccion: string
    ){}
}
class Hero extends PersonaNormal {  // Otra forma de hacer las clases -  Igual a la anterior comentada

    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ){
        super( nombreReal,'Nueva direccion' );
    }
}


const ironman = new Hero('Ironman', 25, 'Diego');

console.log(ironman);



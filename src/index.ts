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

class Hero {  // Otra forma de hacer las clases -  Igual a la anterior

    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ){}
}

class PersonaNormal {
    nombre: string;
    direc
}


const ironman = new Hero('Ironman', 25, 'Diego');

console.log(ironman);

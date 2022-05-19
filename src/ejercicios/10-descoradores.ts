/*
    ===== Código de TypeScript =====
*/

function classDecorador< T extends { new (... args: any []): {} }>(
    constructor: T
) {
    return class extends constructor {
        newPropiedad = "new propiedad";
        hello = "override";
    };
}

@classDecorador
class MisuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MisuperClase);

const miClase = new MisuperClase();

console.log(miClase.miPropiedad);


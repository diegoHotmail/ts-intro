/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'iPad Air',
    precio: 350
}

const tablet: Producto = {
    desc: 'Samsumg - 563',
    precio: 450
}

export function calculaISV (productos: Producto[]): [number, number]{

    let total=0;

    productos.forEach( ({ precio }) => {
        total += precio;
    })

    return [total,  total * 0.21];
}
const articulo = [ telefono, tablet];

const [total, isv] = calculaISV(articulo);

console.log('Total', total);
console.log('ISV', isv);
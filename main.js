class Producto{
    constructor (nombre, precio, categoria,  stock){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    mostrarInfo(){ 
        console.log("Producto: " + this.nombre + ", $" + this.precio + ", Categoria: " + this.categoria + ", Cantidad disponible: " + this.stock);
    }

    precioConIva(){
        return this.precio * 1.21;
    }

    vender() {
        if (this.stock > 0) { this.stock--; 
            console.log("Venta realizada."); } 
        else { console.log("No hay stock disponible.");}
    }
}

const producto1 = new Producto("Pulsera", 6000, "Accesorios", 15);
const producto2 = new Producto("Cartera Boho", 80000, "Bags", 4);
const producto3 = new Producto("Billetera tipo sobre",30000, "Accesorios", 1);
const producto4 = new Producto("Top Preta", 55000, "Indumentaria", 3);

const productos = [producto1, producto2, producto3, producto4];

// Agrego producto Falda a Indumentaria
productos.push(new Producto("Falda", 50000, "Indumentaria", 4));

// Agrego Collar al inicio de la lista
productos.unshift(new Producto("Collar", 7000, "Accesorios", 10));

// Elimino el último producto
let productoEliminado = productos.pop();

console.log("Producto eliminado:", productoEliminado.nombre);

// Reemplazo un producto
productos.splice(4, 1, new Producto("Minifalda", 45000, "Indumentaria", 5));

console.log("Catálogo actualizado");
console.log(productos);

// Recorrer productos
for (const producto of productos) {
    producto.mostrarInfo();
}

producto1.mostrarInfo();
console.log("Precio con IVA: $" + producto1.precioConIva());

producto1.vender();
console.log("Stock después de la venta: " + producto1.stock);

producto2.mostrarInfo();
console.log("Precio con IVA: $" + producto2.precioConIva());

producto3.mostrarInfo();
console.log("Precio con IVA: $" + producto3.precioConIva());

producto3.vender();
console.log("Stock después de la venta: " + producto3.stock);

producto4.mostrarInfo();
console.log("Precio con IVA: $" + producto4.precioConIva());

// FIND
let productoBuscado = prompt("Ingrese el nombre del producto que desea buscar:");

let encontrado = productos.find(producto => producto.nombre.toLowerCase().trim() === productoBuscado.toLowerCase().trim());

if (encontrado) {
    console.log("El producto está en la lista.");
    console.log("Posición:", productos.indexOf(encontrado));
    encontrado.mostrarInfo();
} else {
    console.log("El producto no está en la lista.");
}


// Filter
let productosDisponibles = productos.filter( producto => producto.stock > 0 ); 
console.log("Productos disponibles:"); 
console.table(productosDisponibles);


let valorTotalStock = productos.reduce((total, producto) => {
    return total + (producto.precio * producto.stock);}, 0);

console.log("Valor total del stock: $" + valorTotalStock);
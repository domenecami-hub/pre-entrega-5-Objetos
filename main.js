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
        this.stock--;
    }

}

const producto1 = new Producto("Pulsera", 6000, "Accesorios", 15);
const producto2 = new Producto("Cartera Boho", 80000, "Bags", 5);
const producto3 = new Producto("Billetera tipo sobre",30000, "Accesorios", 8);
const producto4 = new Producto("Top Preta", 55000, "Indumentaria", 3);

const productos = [producto1, producto2, producto3, producto4];

console.log(productos);

producto1.mostrarInfo();
console.log("Precio con IVA: $" + producto1.precioConIva());

producto1.vender();
console.log("Stock después de la venta: " + producto1.stock);

producto2.mostrarInfo();
console.log("Precio con IVA: $" + producto2.precioConIva());

producto2.vender();
console.log("Stock después de la venta: " + producto2.stock);

producto3.mostrarInfo();
console.log("Precio con IVA: $" + producto3.precioConIva());

producto3.vender();
console.log("Stock después de la venta: " + producto3.stock);

producto4.mostrarInfo();
console.log("Precio con IVA: $" + producto4.precioConIva());

producto4.vender();
console.log("Stock después de la venta: " + producto4.stock);


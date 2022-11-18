class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const productosArray = [];

productosArray.push(new Producto(1, 'Remera', 1000));
productosArray.push(new Producto(2, 'Pantalon', 2000));
productosArray.push(new Producto(3, 'Buzo', 2500));
productosArray.push(new Producto(4, 'Zapatilla', 4000));
productosArray.push(new Producto(5, 'Conjunto', 6000));
productosArray.push(new Producto(6, 'Vestido', 5000));

const divProductos = document.querySelector('#divProductos');

productosArray.forEach(producto => {
    divProductos.innerHTML += `
      <div id="${producto.id}" class="card cardProducto">
      <div class="card-body">
      <h2 class="card-title">${producto.nombre}</h2>
      <p class="card-text">$${producto.precio}</p>
      <button id="${producto.id}" class="btn btn-info">Agregar</button>
      </div>
      </div>    
      `
})

const carrito = []

const botonesAgregar = document.querySelectorAll('.btn-info')

botonesAgregar.forEach(boton => {
    boton.onclick = () => {
        const producto = productosArray.find(prod => prod.id === parseInt(boton.id))

        const productoCarrito = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1,
        }
        const { id, nombre, precio, cantidad } = productoCarrito 

        const indexCarrito = carrito.findIndex(prod => prod.id === id)

        indexCarrito === -1
            ? carrito.push(productoCarrito)
            : carrito[indexCarrito].cantidad += 1
    }
})

const botonFinalizar = document.querySelector('#finalizar')
botonFinalizar.onclick = () => {
    const totalCompra = carrito
        .map(prod => prod.precio * prod.cantidad)
        .reduce((elem1, elem2) => elem1 + elem2)
    alert(`El total de su compra es de ${totalCompra}`)
}
const carrito = [];
agregarProduto()
function agregarProduto(){
	const id = prompt("Ingrese un Numero")
	const marca = prompt("Ingrese una Marca")
	const nombre = prompt("Ingrese un Nombre")
	const precio = prompt("Ingrese un Precio")
	
const nuevoProducto = {
	id : id,
	marca : marca,
	nombre : nombre,
	precio : precio
	}
	carrito.push(nuevoProducto)
}
console.log(carrito)
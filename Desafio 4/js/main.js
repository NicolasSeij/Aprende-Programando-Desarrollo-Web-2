let cancelarBucle = "ESC";

prompt(`Bienvenido al Desafio 4`)

while (true) {
let producto = prompt ("Ingrese Su Producto")
if (producto === "ESC") break;
let precio = parseInt(prompt("Ingrese el precio del mismo"))
alert (`Su Producto es : ${producto}. Su Precio Es : ${precio}`)
}
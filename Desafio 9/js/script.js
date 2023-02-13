// Obtener un atributo
var element = document.getElementById("miBoton");
var atributo = element.getAttribute("type");

// Establecer un atributo
element.setAttribute("type", "submit");

// Crear un contenedor
var contenedor = document.createElement("div");
contenedor.id = "miContenedor";

// Agregar un elemento a un contenedor
var element = document.createElement("p");
var texto = document.createTextNode("Este es un párrafo");
element.appendChild(texto);
contenedor.appendChild(element);

// Agregar el contenedor a la página
document.body.appendChild(contenedor);

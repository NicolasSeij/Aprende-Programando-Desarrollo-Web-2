const tv = {
  brand: "Samsung",
  model: "QN75Q900RBFXZA",
  displaySize: 75,
  price: 3500,
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Ftv%2F&psig=AOvVaw0WTXXT9qcpn2A6hVGVVcSC&ust=1675807010546000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOD2it_xgf0CFQAAAAAdAAAAABAJ",
};

const tvDetails = `
  <h2>Televisor</h2>
  <img src="${tv.image}" alt="${tv.brand} ${tv.model}">
  <ul>
    <li>Marca: ${tv.brand}</li>
    <li>Modelo: ${tv.model}</li>
    <li>Pulgadas: ${tv.displaySize}"</li>
    <li>Precio: $${tv.price}</li>
  </ul>
`;
document.getElementById("product").innerHTML = tvDetails;
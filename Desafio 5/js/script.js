let usuario = "user01";
let password =  "123123";

IngresarData();

function IngresarData() {
    let NuevoUsuario = prompt("Ingrese su usuario");
    let NuevoPass = prompt("Ingrese su contraseña");
    let intentos = 0;
    while (intentos < 3) {
        if (NuevoUsuario === usuario && NuevoPass === password) {
            alert("Los datos son correctos");
            return;
        } else if (NuevoUsuario !== usuario) {
            alert("El usuario es incorrecto");
        } else {
            alert("La contraseña es incorrecta");
        }
        NuevoUsuario = prompt("Ingrese su usuario");
        NuevoPass = prompt("Ingrese su contraseña");
        intentos++;
    }
    alert("Has alcanzado el número máximo de intentos");
}

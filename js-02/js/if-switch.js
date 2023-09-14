// let cantidad = 3;

// if (cantidad >= 3) {
//   console.log("Tiene un descuento");
// } else {
//   console.log("Paga el precio de lista");
// }

// console.log(cantidad >= 3);

// ---

let semaforo = "rojo";

semaforo = semaforo.toLowerCase();

// if (semaforo == "Verde" || semaforo == "verde") {
//   console.log("Avanzar");
// } else {
//   if (semaforo == "amarillo") {
//     console.log("Precaución");
//   } else {
//     console.log("Detener");
//   }
// }

if (semaforo == "Verde" || semaforo == "verde") {
  console.log("Avanzar");
} else if (semaforo == "amarillo") {
  console.log("Precaución");
} else {
  console.log("Detener");
}

switch (semaforo) {
  case "verde":
    console.log("Avanzar");
    break;
  case "amarillo":
    console.log("Precaución");
    break;
  default:
    console.log("Detener");
}

// let nombre = "Juan";
// let apellido = "Perez";

// const auto = {
//   marca: "Fiat",
//   modelo: "Palio",
//   puertas: 5,
// };

// const auto2 = {
//   marca: "Ford",
//   modelo: "Ranger",
// };

// console.log(Object.getOwnPropertyDescriptor(auto, "marca"));
// console.log(Object.keys(auto));

// ---

const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  id: 123,
};

delete usuario.id;

usuario.dni = 98765432;

usuario.nombre = "Juan Pablo";

console.log(usuario.nombre);
console.log(usuario["apellido"]);

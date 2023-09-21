const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  id: 123,
  dni: 98765432,
};

for (const key in usuario) {
  //   console.log(key, usuario[key]);
  console.log(`obj.${key}: ${usuario[key]}`);
}

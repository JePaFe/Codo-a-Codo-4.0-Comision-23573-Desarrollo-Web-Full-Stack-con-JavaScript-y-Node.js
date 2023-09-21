function Persona(dni, nombre, apellido) {
  this.dni = dni;
  this.nombre = nombre;
  this.apellido = apellido;

  //   this.nombreCompleto = () => {
  //     return `${this.nombre} ${this.apellido}`;
  //   };
}

Persona.prototype.nombreCompleto = function () {
  return `${this.nombre} ${this.apellido}`;
};

const persona1 = new Persona(98765432, "Juan", "Perez");

persona1.nombre = "Pedro";
persona1.id = 123;

const nombre_completo = persona1.nombreCompleto();
console.log(nombre_completo);

delete persona1.apellido;

const persona2 = new Persona(23456789, "Maria", "Garcia");

// const num = 1;
// num = 3;

// const auto = {
//   marca: "Fiat",
//   modelo: "Ranger",
// };

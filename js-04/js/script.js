class Persona {
  constructor(id, nombre, apellido) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.admin = false;
  }

  nombreCompleto = function () {
    return `${this.nombre} ${this.apellido}`;
  };
}

const persona1 = new Persona(1, "Juan", "Perez");

persona1.nombre = "Pedro";
persona1.dni = 98765432;

const nombre_completo = persona1.nombreCompleto();
console.log(nombre_completo);

// ---

class Auto {}

const auto1 = new Auto();

auto1.marca = "Ferrari";

const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  id: 123,
  dni: 98765432,
  saludar: function () {
    console.log("Hola");
  },
  //   nombreCompleto: function () {
  //     // this.saludar();
  //     return `${this.nombre} ${this.apellido}`;
  //   },
  nombreCompleto(mensaje) {
    // this.saludar();
    // return `${this.nombre} ${this.apellido}`;
    return mensaje + this.nombre + " " + this.apellido;
  },
  //   nombreCompleto: () => { // no se puede usar arrow function
  //     // this.saludar();
  //     return `${this.nombre} ${this.apellido}`;
  //   },
};

// usuario.saludar();

const nombre_completo = usuario.nombreCompleto("Hola ");
console.log(nombre_completo);

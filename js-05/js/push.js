// const datos = ["Lunes", 1, true, { nombre: "Juan" }, [1, 2, 3], () => {}];

// console.log(datos[datos.length - 1]);

// ---

// const dias = ["Lunes", "Martes", "Miércoles"];

// console.log(dias[1]);

// console.log(dias.at(0));
// console.log(dias.at(-1));

// ---

const dias = ["Martes", "Miércoles"];

// dias[2] = "Jueves";
// dias[dias.length] = "Jueves";
dias.push("Jueves", "Viernes");

dias.unshift("Lunes");

// console.log(dias[4]);

let dia = dias.pop();
console.log(dia);

dia = dias.shift();
console.log(dia);

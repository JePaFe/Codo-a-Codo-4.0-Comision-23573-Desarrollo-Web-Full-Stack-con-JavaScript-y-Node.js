// const sumarConsole = function (num1, num2) {
//   let suma = num1 + num2;
//   console.log("La suma es: " + suma);
// };

// const sumarAlert = function (num1, num2) {
//   let suma = num1 + num2;
//   alert("La suma es: " + suma);
// };

// sumarConsole(3, 8);
// sumarAlert(6, 2);

// ---

const sumar = function (num1, num2, callback) {
  //   console.log(num1, num2, callback);
  let suma = num1 + num2;
  callback("La suma es: " + suma);
};

// sumar(3, 5, console.log);
// sumar(3, 5, alert);

//                      La suma es: 8
// sumar(3, 5, function (texto) {
//   document.write(texto);
// });

sumar(3, 5, texto => document.write(texto));
    
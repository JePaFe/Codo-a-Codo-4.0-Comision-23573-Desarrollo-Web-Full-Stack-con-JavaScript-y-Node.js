// function fn() {
//   console.log("Hola Asíncrono");
// }

// console.log("1");

// setTimeout(() => {
//   console.log("Hola Asíncrono");
// }, 3000);

// console.log("2");

// ---

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const multiplicar = (num1, num2, callback) => {
  setTimeout(() => {
    callback(num1, num2, num1 * num2);
  }, getRandomIntInclusive(100, 3000));
};

// const fn = (num1, num2, result) => {
//   console.log(`${num1} * ${num2} = ${result}`);
// };

multiplicar(1, 2, (num1, num2, result) => {
  console.log(`${num1} * ${num2} = ${result}`);

  multiplicar(2, 2, (num1, num2, result) => {
    console.log(`${num1} * ${num2} = ${result}`);

    multiplicar(3, 2, (num1, num2, result) => {
      console.log(`${num1} * ${num2} = ${result}`);
    });
  });
});

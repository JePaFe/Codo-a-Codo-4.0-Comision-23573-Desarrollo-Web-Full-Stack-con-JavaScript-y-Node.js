// const esperar = (condicion) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (condicion) {
//         resolve("OK");
//       } else {
//         reject("Error");
//       }
//     }, 1000);
//   });
// };

// console.log("1");

// esperar(false)
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("Siempre");
//   });

// console.log("2");

// ---

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const multiplicar = (num1, num2) => {
  console.log(typeof num1);
  return new Promise((resolve, reject) => {
    if (typeof num1 != "number" || typeof num2 != "number") {
      reject({ error: "Tiene que ser números" });
    }
    setTimeout(() => {
      resolve({
        num1: num1,
        num2,
        result: num1 * num2,
      });
    }, getRandomIntInclusive(100, 2000));
  });
};

multiplicar(1, 2)
  .then((res) => {
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);

    return multiplicar(2, 2);
  })
  .then((res) => {
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);

    return multiplicar(3, 2);
  })
  .then((res) => {
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);
  })
  .catch((error) => console.log(error));

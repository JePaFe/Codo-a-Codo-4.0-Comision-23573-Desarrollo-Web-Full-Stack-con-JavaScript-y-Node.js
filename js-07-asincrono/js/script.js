function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const multiplicar = (num1, num2) => {
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

const tabla = async () => {
  try {
    let res = await multiplicar(1, 2);
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);

    res = await multiplicar(2, 2);
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);

    res = await multiplicar(3, 2);
    console.log(`${res.num1} * ${res.num2} = ${res.result}`);
  } catch (error) {
    console.log(error);
  }
};

tabla();

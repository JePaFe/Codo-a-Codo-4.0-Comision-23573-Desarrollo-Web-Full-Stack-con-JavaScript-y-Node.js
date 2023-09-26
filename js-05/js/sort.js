// const nombres = ["Maria", "Juan", "Ana", "Pedro"];

// nombres.sort().reverse();

// --

const numeros = [5, 10, 1, 9, 9, 20, 30, 2, 4];

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a debe ser igual b
  return 0;
}

// numeros.sort(compare);
numeros.sort((a, b) => a - b);

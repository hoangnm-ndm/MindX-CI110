function sum(...args) {
  console.log(args);
  console.log(Array.isArray(args));
  let total = 0;

  // Cach 1:
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  // Cach 2:
  // args.forEach((item, index) => {
  //   total += item;
  // });

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 1000));

const pi = 3.14;
const myNumber = 10;

export { sum, pi, myNumber };

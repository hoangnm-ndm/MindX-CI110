/**
 * * Input ?
 * * Output ?
 */

function sum(a, b) {
  // console.log(a + b);
  return a + b;
}

console.log(sum(10, 20));

// function checkEvenNumber(number) {
//   console.log("test");
// }

const checkEvenNumber = (number) => {
  if (number % 2 === 0) return true;
  return false;
};

console.log(checkEvenNumber(10));
console.log(checkEvenNumber(11));

const sum2 = (a, b) => a + b;

console.log(sum2(100, 1000));

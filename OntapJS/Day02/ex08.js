// Bai 01
export function sumArray(array) {
  let sum = 0;
  for (let item of array) {
    sum += item;
  }
  return sum;
}

// Bai 02
export function countOccurrences(array, value) {
  let numberOccurrences = 0;
  for (let item of array) {
    if (item === value) {
      numberOccurrences += 1;
    }
  }
  return numberOccurrences;
}
console.log(countOccurrences([1, 2, 2, 3, 2, 4, 100], 2));

// Bai 03
export function removeDuplicates(array) {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      // neu item CHUA ton tai trong result thi push vao array
      result.push(item);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 1, 6, -100, -100, 1000]));

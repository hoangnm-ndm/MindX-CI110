import { sumArr } from "./utilitis.js";
import { countOccurrences } from "./utilitis.js";
import { removeDuplicate } from "./utilitis.js";
import { flattenArray } from "./utilitis.js";
import { isSymmetric } from "./utilitis.js";
import { findSecondLargest } from "./utilitis.js";
import { sortProductsByPrice } from "./utilitis.js";
import { findMostExpensiveProduct } from "./utilitis.js";
import { groupByType } from "./utilitis.js";
const arr = [1, 2, 3, 4];
sumArr(arr);
const arr1 = [1, 2, 2, 3, 2];
countOccurrences(arr1, 2);
const arr2 = [1, 2, 2, 3, 4, 4, 6, 2, 3, 6];
removeDuplicate(arr2);
const arr3 = [
  [1, 2],
  [3, 4],
];
flattenArray(arr3);
const arr4 = [1, 2, 3, 3, 1];
console.log(isSymmetric(arr4));
const arr5 = [4, 5, 6, 7, 10, 9];
findSecondLargest(arr5);
const products = [
  { name: "Product A", price: 30 },
  { name: "Product B", price: 20 },
  { name: "Product C", price: 50 },
];
sortProductsByPrice(products);
console.log(findMostExpensiveProduct(products));

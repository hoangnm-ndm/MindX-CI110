// Bai 1
export function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// Bai 2
export function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === value) {
      count += 1;
    }
  }
  console.log(`${value} thi xuat hien ${count} lan`);
}

// Bai 3
export function removeDuplicate(arr) {
  const newArr = [];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}
// Bai 4
export function flattenArray(arr) {
  const flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flatArr.push(arr[i][j]);
    }
  }
  arr.flat(2);
  console.log(flatArr);
}
// Bai 5
export function isSymmetric(arr) {
  for (let i = 0; i <= arr.length / 2 - 1; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isSymmetric([1, 2, 3, 2, 1, 100]));
console.log(isSymmetric([1, 2, 3, 2, 1]));

// Bai 6
export function findSecondLargest(arr) {
  const maxFirstValue = Math.max(...arr);
  const newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] !== maxFirstValue) {
      newArr.push(arr[i]);
    }
  }
  const maxSeconValue = Math.max(...newArr);
  console.log(maxSeconValue);
  //* khi không tìm thấy giá trị lớn thứ hai thì trả về null
}

console.log(findSecondLargest([1, 1, 1, "MindX", NaN]));

// Bai 7
export function sortProductsByPrice(products) {
  products.sort((a, b) => b.price - a.price);
  console.log(products);
  return products;
}
// Bai 8
export function findMostExpensiveProduct(products) {
  const itemprices = [];
  for (let i = 0; i <= products.length - 1; i++) {
    itemprices.push(products[i].price);
  }
  const [result] = products.filter(
    (item) => item.price === Math.max(...itemprices)
  );
  return result;
}

/**
 * * Bước 1: Gán phần tử đầu tiên là giá cao nhất
 * * Bước 2: Duyệt qua for loop từ phần tử thứ 2 đến hết.
 * * Bước 3: Kiểm tra, nếu item > max, -> max = item
 * * Nếu item <= max, giữ nguyên max.
 *
 * * Bước 4: Return max
 */

function findMostExpensiveProduct2(products) {
  let max = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > max.price) max = products[i];
  }
  return max;
}

console.log(
  findMostExpensiveProduct2([
    { name: "Product A", price: 30 },
    { name: "Product B", price: 90 },
    { name: "Product C", price: 100 },
  ])
);

// console.log(
//   findMostExpensiveProduct([
//     { name: "Product A", price: 30 },
//     { name: "Product B", price: 20 },
//     { name: "Product C", price: 50 },
//   ])
// );
// Bai 9
export function groupByType(arr) {
  const newObj = {};

  for (let i = 0; i < arr.length; i++) {
    const type = arr[i].type;

    if (!newObj[type]) {
      newObj[type] = [];
    }

    newObj[type].push(arr[i]);
  }

  return newObj;
}

function groupByType2(arr) {
  const result = arr.reduce((acc, cur) => {
    // logic code
    // acc = accumulator (biến tích luỹ)
    // cur = current value (giá trị của phần tử đang duyệt)
    if (acc[cur.type]) {
      acc[cur.type]++;
    } else {
      acc[cur.type] = 1;
    }
    return acc;
  }, {});
  return result;
}

console.log(
  groupByType2([
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" },
    { type: "fruit", name: "banana" },
  ])
);

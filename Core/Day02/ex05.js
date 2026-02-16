/**
 *  values, keys, entries
 *
 */

Object.values({ a: 1, b: 2, c: 3 }); // [1, 2, 3]
Object.keys({ a: 1, b: 2, c: 3 }); // ['a', 'b', 'c']
Object.entries({ a: 1, b: 2, c: 3 }); // [['a', 1], ['b', 2], ['c', 3]]

const student = {
  id: 1,
  name: "Hoang",
  age: 22,
};
for (const key of Object.keys(student)) {
  console.log(key, student[key]);
}

//* values: sử dụng với mục đích lấy ra giá trị của object/array
for (const iterator of student) {
  console.log(iterator);
}

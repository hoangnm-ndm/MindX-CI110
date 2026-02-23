const students = [
  { id: 1, fname: "minh" },
  { id: 2, fname: "duc" },
  { id: 3, fname: "nhat" },
  { id: 4, fname: "hoang" },
];
// students.find((item) => console.log(item));
console.log(students.findIndex((item) => item.id === 3)); // 2

arr = [
  "a",
  "b",
  "a",
  "c",
  "b",
  "a",
  "f",
  "c",
  "a",
  "b",
  "a",
  "b",
  "c",
  "a",
  "j",
  "s",
  "s",
];
function unique(arr) {
  rs = [];
  for (let i of arr) {
    if (!rs.includes(i)) {
      rs.push(i);
    }
  }
  return rs;
}
const result = unique(arr);
//unique = [ 'a', 'b', 'c' ]
//const countA = arr.filter(x => x === 'a').length;
function counter(uniarr, arr) {
  const result = []; // string[]
  for (let j of uniarr) {
    result.push(`${j} = ${arr.filter((x) => x === j).length}`);
  }
  return result;
}
let tresult = counter(unique(arr), arr);
const obj = {};
tresult.forEach((item) => {
  const parts = item.split("=");
  const key = parts[0];
  const valueStr = parts[1];
  //   const value = Number(parts[1].trim());
  obj[key] = valueStr;
});
console.log(obj);

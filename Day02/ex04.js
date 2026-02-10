const arr = [1, 2, 3, 4];
console.log(
  arr.map((item) => {
    return item * 2;
  })
);

const students = [
  {
    id: 1,
    name: "Hoang",
    age: 22,
  },
  {
    id: 2,
    name: "Huy",
    age: 19,
  },
  {
    id: 3,
    name: "Thao",
    age: 21,
  },
  {
    id: 4,
    name: "Hoang",
    age: 18,
  },
];

/**
 * Lấy ra danh sách học viên trên 20 tuổi
 */

const result = students.filter((student) => student.age > 20);
console.log(result);
// * beeter comment

const arr = [1, 2, 3, 4, , , , 5];
console.log(arr[1]);
console.log(arr[5]);
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

console.log(arr.length);

console.log(arr.push(100));
console.log(arr.pop());
console.log(arr);

const students = ["Hoang", "Huy"];
students.splice(1, 1, "Thao", "Huynh");
console.log(students);

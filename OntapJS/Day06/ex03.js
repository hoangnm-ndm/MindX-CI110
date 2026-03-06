const setPromise = new Promise((resolve, reject) => {
  // Logic xử lý bất đồng bộ ở đây
  const check = false;
  if (check) {
    // Chuỗi Kết quả thành công sẽ được đưa vào giá trị tham số của callback trong .then
    resolve("Kết quả thành công");
  } else {
    // Chuỗi Có lỗi xảy ra sẽ được đưa vào giá trị tham số của callback trong .catch
    reject("haha - error");
  }
});

console.log(setPromise);
console.log(typeof setPromise);
setPromise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("End Game!");
  });

// * Vì promise bất đồng bộ nên sẽ ra kết quả sau.
console.log("Sau promise");

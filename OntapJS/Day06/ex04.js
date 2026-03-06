// Promise 1: Hoàn thành sau 2 giây
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Promise 1 đã hoàn thành sau 2 giây");
  }, 2000);
});

// Promise 2: Hoàn thành sau 1 giây
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Promise 2 đã hoàn thành sau 1 giây");
  }, 1000);
});

console.log("⏳ Bắt đầu thực thi các Promise...");

promise1.then((result) => console.log(result));
promise2.then((result) => console.log(result));

console.log("⏳ Các Promise đang chạy...");

console.log({ promise2 });

/**
 * * Tìm hiểu thêm:
 * ? - Promis chain
 * ? - Các phương thức khác của promise: resolve, reject, race, all,
 */

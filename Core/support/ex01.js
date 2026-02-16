/**
 * * Hầu như mọi loại dữ liệu, thực thể thì đều biểu diễn được dưới dạng dữ liệu danh sách/đối tượng.
 * * => CRUD (Create Read Update Delete)
 * * => Read => Sắp xếp, lọc, tìm, phân trang, (nghiệp vụ cần giải quyết)
 * * => Cao cấp, sâu hơn -> đăng nhập đa yếu tố, xác thực phân quyền, lưu và xử lý giỏ hàng, ...domain: fintech, edutech, GOV, ...
 * * => JavaScript có rất nhiều phương thức (array) để giải quyết. (filter, find, findIndex, findLast, findLastIndex, include, forEach, map, reduce,...)
 *
 * * for(;;) {}
 *
 * * => Tư duy giải quyết bài toán.
 *
 * * Nhu cầu giải quyết vấn đề từ người dùng có thay đổi không? => Hầu như không thay đổi.
 * *
 */

const products = [
  { id: 1, title: "product A", price: 200 },
  { id: 2, title: "product B", price: 300 },
  { id: 4, title: "product B", price: 1000 },
  { id: 3, title: "product C", price: 240 },
];

console.log(products.filter((item) => item.title === "product B"));

// * Tôi không biết phương thức gì của mảng trong JS
const result = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].title === "product B") {
    result[result.length] = products[i];
  }
}

console.log(result);

/**
 * * Input? Output?
 * * Logic bóc tách và triển khai là gì?
 * * Từng bước giải quyết?
 * * Test case: Những TH đúng, TH sai.
 */

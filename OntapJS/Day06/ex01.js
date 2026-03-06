function A() {
  console.log("Trong A");
  setTimeout(() => {
    console.log("Tôi là Function A - trong setTimeout");
    console.log(
      "Công việc này sau 3s mới giải quyết - không vấn đề gì nếu như nó không liên quan đến đoạn code ngoài setTimeout ở phía sau"
    );
    // hàm callback sẽ được thực thi sau 3 giây
  }, 0);
}
function B() {
  console.log("Tôi là Function B");
}
A();
B();

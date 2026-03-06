function functionC(result) {
  // đồng bộ
  console.log("C được thực hiện");
  console.log("Giá trị tham số:", result);
}

const setPromiseB = new Promise((resolve, reject) => {
  let check = true;
  // some logic ...
  const mockValue = {
    data: {
      name: "MindX School",
      age: 10,
    },
  };
  if (check) {
    resolve(mockValue);
  } else {
    reject("Some error...");
  }
});

async function execute() {
  try {
    console.log("--- chạy 1 ---");
    const result = await setPromiseB;
    console.log("--- chạy 2 ---");
    console.log(result);
    console.log("--- chạy 3 ---");
    functionC(result);
  } catch (error) {
    // khi promise bị lỗi (rejected) kết quả lỗi sẽ được đưa vào tham số error của catch
    // chương trình sẽ không bị crash khi có try catch
    console.log(error);
  }
}

// thực thi chương trình
execute();

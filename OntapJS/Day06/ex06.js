const api = "https://dummyjson.com/productsssssssssssss";

// fetch(api, {})
//   .then((res) => {
//     console.log(res);
//     console.log(typeof res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

async function callAPI() {
  try {
    const res = await fetch(api);
    console.log(res);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

callAPI();

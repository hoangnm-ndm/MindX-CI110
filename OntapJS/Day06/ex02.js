function viecA(callback) {
  setTimeout(() => {
    console.log("Lam viec A - trồng cây");
    callback();
  }, 3000);
}

/**
 * * Callback là truyền 1 hàm vào hàm khác như 1 đối số
 */

function viecB() {
  setTimeout(() => {
    console.log("Lam viec B - hái quả");
  }, 2000);
}

viecA(viecB);

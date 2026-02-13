/**
 * * Tư duy về libraries & frameworks
 * * Chia để trị: Chia nhỏ để dễ quản lý, sửa chữa và tái sử dụng -> Component (thành phần)
 * * Luồng dữ liệu: two-way binding >< one-way binding.
 * * Các thao tác thủ công với DOM.
 */

// * DOM = Document Object Model
// * Manual DOM = JavaScript.

//* Tư duy bóc tách và chia nhỏ:

// * Nếu coi header là 1 component thì cần làm 3 việc:
/**
 * ? Việc 1: Biết nội dung này đặt vào đâu?
 * ? Việc 2: Sinh ra giao diện và dữ liệu tương ứng.
 * ? Việc 3: Đưa vào hiển thị và theo dõi sự thay đổi.
 */

const menu = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Category", href: "/categories" },
  { id: 3, name: "About", href: "/about-us" },
  { id: 4, name: "Services", href: "/services" },
];

const headerElement = document.getElementById("header");

// Component
function headerRender(menu) {
  let contentMenu = "";
  menu.forEach((item) => {
    contentMenu += `<li><a href="${item.href}">${item.name}</a></li>`;
  });

  return /*html */ `
    <div class="logo">logo</div>
    <nav>
      <ul>
        ${contentMenu}
      </ul>
    </nav>
  `;
}

// * render = kết xuất giao diện
headerElement.innerHTML = headerRender(menu);

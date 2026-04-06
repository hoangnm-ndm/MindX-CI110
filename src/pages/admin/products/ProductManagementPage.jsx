import React, { useContext } from "react";
import { Link } from "react-router";
import { ProductContext } from "../../../context/ProductContext";
import { deleteProduct } from "../../../api/productApi";
import { toast } from "react-toastify";

const ProductManagementPage = () => {
  const { products, setProducts } = useContext(ProductContext);

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure?");
    if (isConfirm) {
      const data = await deleteProduct(id);
      setProducts((prev) => prev.filter((item) => item.id !== id));
      toast.success(`Xoá thành công: ${data.title}`);
    } else {
      toast.error("Đã huỷ xoá!");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-[#061269]">
            Quản trị sản phẩm
          </h1>
          <Link
            to="/admin/products/add"
            className="bg-[#061269] text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            + Thêm mới
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Tên</th>
                <th className="p-3 text-left">Ảnh</th>
                <th className="p-3 text-left">Giá</th>
                <th className="p-3 text-center">Hành động</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{index + 1}</td>

                  <td className="p-3 font-medium text-gray-800">
                    {item.title}
                  </td>

                  <td className="p-3">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                  </td>

                  <td className="p-3 text-[#061269] font-semibold">
                    ${item.price}
                  </td>

                  <td className="p-3 flex justify-center gap-2">
                    <Link
                      to={`/admin/products/update/${item.id}`}
                      className="px-3 py-1 rounded-lg bg-yellow-400 text-white hover:bg-yellow-500 transition"
                    >
                      Update
                    </Link>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-6 text-gray-400">
                    Không có sản phẩm nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementPage;

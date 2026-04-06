import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router";
import {
  createProduct,
  getProductById,
  updateProduct,
} from "../../../api/productApi";
import { toast } from "react-toastify";

const ProductFormPage = () => {
  const { id } = useParams();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({});

  useEffect(() => {
    if (!id) return;
    (async () => {
      const data = await getProductById(id);
      reset(data);
    })();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      if (id) {
        await updateProduct(id, data);
        toast.success("Cập nhật sản phẩm thành công");
      } else {
        await createProduct(data);
        toast.success("Thêm sản phẩm thành công");
      }
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Đã xảy ra lỗi!");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-[#061269]">
            {id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
          </h1>
          <Link
            to="/admin/products"
            className="text-sm text-gray-500 hover:text-[#061269]"
          >
            ← Quay lại
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tên sản phẩm
            </label>
            <input
              type="text"
              {...register("title", { required: "Không được bỏ trống" })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#061269]"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Giá
            </label>
            <input
              type="number"
              {...register("price", { required: "Không được bỏ trống" })}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#061269]"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mô tả
            </label>
            <textarea
              rows={3}
              {...register("description")}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#061269]"
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Thumbnail URL
            </label>
            <input
              type="text"
              {...register("thumbnail")}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#061269]"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số lượng
            </label>
            <input
              type="number"
              {...register("stock")}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#061269]"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <Link
              to="/admin/products"
              className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
            >
              Huỷ
            </Link>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#061269] text-white hover:opacity-90 transition"
            >
              {id ? "Cập nhật" : "Thêm mới"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFormPage;

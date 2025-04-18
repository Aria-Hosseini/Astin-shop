import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const [product, setProduct] = useState([]); 
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:4565/products")
      .then((result) => {
        const products = result.data.data;
        const productData = products.find((item) => item.id === parseInt(id));
        setProduct(productData);
      })
      .catch((error) => {
        console.error("خطا در دریافت اطلاعات:", error);
      });
  }, [id]);

  if (!product) {
    return <p>در حال بارگذاری اطلاعات محصول...</p>;
  }

  return (
    <div className="product-page p-6 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 flex justify-center items-start">
        <img
          src={product.imgurl}
          alt={product.title}
          className="w-72 h-72 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
        <h1 className="text-3xl font-bold border-b pb-2">{product.title}</h1>
        <p className="text-xl text-gray-700">
          قیمت: <span className="font-semibold">{product.price} تومان</span>
        </p>

        <div className="border-t pt-4 mt-4">
          <button className="w-full bg-[#0eb79b] hover:bg-[#4b8d82] text-white font-bold py-3 px-6 rounded-lg transition duration-200">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}

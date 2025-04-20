import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../cards/Cards";

export default function Shop() {
  const [Product, setProduct] = useState([]);
  const [FilteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("همه");

  useEffect(() => {
    axios
      .get("http://localhost:4565/products")
      .then((show) => {
        setProduct(show.data.data);
        setFilteredProducts(show.data.data);
      })
      .catch((error) => {
        console.error("خطا در دریافت اطلاعات:", error);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "همه") {
      setFilteredProducts(Product);
    } else {
      setFilteredProducts(Product.filter((item) => item.category === category));
    }
  };

  return (
    <div className="flex flex-row h-screen">
        <div className="w-3/4 flex flex-col items-center justify-center">
        <div className="mt-5">
          <h3 className="text-2xl">محصولات</h3>
        </div>
        <div className="h-screen flex flex-row flex-wrap items-start justify-center space-x-3 space-y-3">
          {FilteredProducts.map((result) => (
            <Cards key={result.id} products={result} />
          ))}
        </div>
      </div>
      
      <div className="sticky top-0 w-100 bg-gray-100 p-4 shadow-lg mt-5 mr-5 rounded-lg">
        <h3 dir="rtl" className="text-xl font-bold mb-4">فیلتر محصولات</h3>
        <ul className="space-y-2">
          <li>
            <button
              className={`block w-full text-right px-4 py-2 rounded ${
                selectedCategory === "همه" ? "bg-[#0eb79b] text-white" : "bg-white"
              }`}
              onClick={() => handleCategoryChange("همه")}
            >
              همه
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-right px-4 py-2 rounded ${
                selectedCategory === "مردانه" ? "bg-[#0eb79b] text-white" : "bg-white"
              }`}
              onClick={() => handleCategoryChange("مردانه")}
            >
              مردانه
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-right px-4 py-2 rounded ${
                selectedCategory === "ورزشی" ? "bg-[#0eb79b] text-white" : "bg-white"
              }`}
              onClick={() => handleCategoryChange("ورزشی")}
            >
              ورزشی
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-right px-4 py-2 rounded ${
                selectedCategory === "زنانه" ? "bg-[#0eb79b] text-white" : "bg-white"
              }`}
              onClick={() => handleCategoryChange("زنانه")}
            >
              زنانه
            </button>
          </li>
          <li>
            <button
              className={`block w-full text-right px-4 py-2 rounded ${
                selectedCategory === "زمستانی" ? "bg-[#0eb79b] text-white" : "bg-white"
              }`}
              onClick={() => handleCategoryChange("زمستانی")}
            >
              زمستانی
            </button>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

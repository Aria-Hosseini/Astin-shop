import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from '../../context/CartContext';
import "./Productstyle.css";
import CommentSection from '../layouts/CommentSection';

export default function Product() {
  const [product, setProduct] = useState([]);
  const [tempQuantity, setTempQuantity] = useState(1);
  const { id } = useParams();
  const { addToCart, cartItems, updateQuantity } = useCart();

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

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        image: product.imgurl,
        name: product.title,
        price: product.price,
        quantity: tempQuantity
      });
      setTempQuantity(1); // Reset quantity after adding to cart
    }
  };

  const handleIncreaseQuantity = () => {
    setTempQuantity(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (tempQuantity > 1) {
      setTempQuantity(prev => prev - 1);
    }
  };

  const cartItem = cartItems.find(item => item.id === parseInt(id));
  const quantity = cartItem ? cartItem.quantity : 0;

  if (!product) {
    return <p>در حال بارگذاری اطلاعات محصول...</p>;
  }

  useEffect(() => {
    const list = document.querySelector('.scrolling-text');
    
    if (list) {
      const resetAnimation = () => {
        list.style.animation = 'none';
        setTimeout(() => {
          list.style.animation = 'scroll 12s infinite';
        }, 10);
      };

      list.addEventListener('animationiteration', resetAnimation);

      return () => {
        list.removeEventListener('animationiteration', resetAnimation);
      };
    }
  }, []);

  return (
    
    <div className="flex flex-col items-center justify-center">
    <div className="h-screen flex flex-row space-x-10 items-center justify-center">
      <div className="w-100 bg-white rounded-lg shadow-lg p-5 flex flex-col gap-4 h-100 justify-between">
        <p dir="rtl" className="text-xl text-gray-700">
          قیمت: <span className="font-semibold">{product.price} تومان</span>
        </p>

        <div className="scrolling-text-container">
          <ul className="scrolling-text">
            <li>100 نفر این محصول را پسندیده‌اند</li>
            <li>ارسال به سراسر کشور</li>
            <li>فروش ویژه!</li>
            <li>تضمین کیفیت و اصالت کالا</li>
          </ul>
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDecreaseQuantity}
                className="px-3 py-1 border rounded cursor-pointer"
              >
                -
              </button>
              <span className="px-2">{tempQuantity}</span>
              <button
                onClick={handleIncreaseQuantity}
                className="px-3 py-1 border rounded cursor-pointer"
              >
                +
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="cursor-pointer bg-[#0eb79b] hover:bg-[#4b8d82] text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>

      <div className="w-100 bg-white rounded-lg shadow-lg p-5 flex flex-col gap-4 h-100">
        <h1 dir="rtl" className="text-3xl font-bold border-b pb-2">{product.title}</h1>
        <p dir="rtl">{product.discription}</p>
      </div>

      <div className="flex items-center p-5">
        <img
          src={product.imgurl}
          alt={product.title}
          className="w-100 h-100 object-cover rounded-lg shadow-lg"
        />
      </div>

      </div>
      <div className="flex flex-row ">
          <CommentSection />
      </div>
    </div>
  );
}

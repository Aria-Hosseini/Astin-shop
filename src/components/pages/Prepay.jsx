import React, { useState } from "react";

export default function Prepay() {
  const [promoCode, setPromoCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    postalCode: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("لطفاً یک روش پرداخت انتخاب کنید!");
    } else {
      alert("پرداخت شما در حال پردازش است...");
    }
  };

  return (
    <div className="prepay-page bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">صفحه پرداخت</h1>
      <div className="flex flex-col md:flex-row gap-6">
    
        <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow">
          <h2 dir="rtl" className="text-xl font-bold mb-4">اطلاعات پرداخت</h2>
          <div className="mb-4">
            <label dir="rtl" className="block text-sm font-bold mb-2">کد تخفیف</label>
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full p-2 border rounded-md text-right focus:ring focus:ring-[#0eb79b] border-gray-300"
              placeholder="کد تخفیف را وارد کنید"
            />
            <button
              className="mt-2 bg-[#0eb79b] hover:bg-[#4b8d82] text-white py-1 px-4 rounded"
              onClick={() => alert(`کد تخفیف "${promoCode}" اعمال شد!`)}
            >
              اعمال کد تخفیف
            </button>
          </div>

          <p dir="rtl" className="text-gray-600 mb-4">
            درگاه پرداخت رو انتخاب کن یا پرداخت از طریق کیف پول و بزن رو دکمه پرداخت.
          </p>

          <div className="mb-4">
            <label dir="rtl" className="block text-sm font-bold mb-2">روش پرداخت</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input
                  dir="rtl"
                  type="radio"
                  name="paymentMethod"
                  value="gateway"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                درگاه پرداخت
              </label>
              <label className="flex items-center">
                <input
                
                  type="radio"
                  name="paymentMethod"
                  value="wallet"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                  dir="rtl"
                />
                پرداخت از طریق کیف پول
              </label>
            </div>
            
          </div>

          <button
            className="w-full bg-[#0eb79b] hover:bg-[#4b8d82] text-white font-bold py-2 px-4 rounded"
            onClick={handlePayment}
          >
            پرداخت
          </button>
        </div>
        <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow">
          <h2 dir="rtl" className="text-xl font-bold mb-4">اطلاعات کاربر</h2>
          <form className="flex flex-col gap-4">
            <div>
              <label dir="rtl" className="block text-sm font-bold mb-2">نام</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md text-right focus:ring focus:ring-[#0eb79b] border-gray-300"
                placeholder="نام را وارد کنید"
              />
            </div>
            <div>
              <label dir="rtl" className="block text-sm font-bold mb-2">نام خانوادگی</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md text-right focus:ring focus:ring-[#0eb79b] border-gray-300"
                placeholder="نام خانوادگی را وارد کنید"
              />
            </div>
            <div>
              <label dir="rtl" className="block text-sm font-bold mb-2">شهر</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md text-right focus:ring focus:ring-[#0eb79b] border-gray-300"
                placeholder="نام شهر را وارد کنید"
              />
            </div>
            <div>
              <label dir="rtl" className="block text-sm font-bold mb-2">استان</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md text-right focus:ring focus:ring-[#0eb79b] border-gray-300"
                placeholder="نام استان را وارد کنید"
              />
            </div>
            <div>
              <label dir="rtl" className="block text-sm font-bold mb-2">کد پستی</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md text-right focus:ring focus:ring-[#0eb79b] border-gray-300"
                placeholder="کد پستی را وارد کنید"
              />
            </div>
            <div>
              <label dir="rtl" className="block text-sm font-bold mb-2">توضیحات</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md text-right focus:ring focus:ring-[#0eb79b] border-gray-300"
                placeholder="توضیحات را وارد کنید"
              ></textarea>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

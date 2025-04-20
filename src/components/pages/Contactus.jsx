export default function Contactus() {
    return (
      <div className="contact-page bg-gray-50 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-10">
        <h3 className="text-2xl font-bold mb-6 text-center">تماس با ما</h3>
        
        
        <form className="flex flex-col space-y-4">
          <div>
            <label dir="rtl" htmlFor="name" className="block text-sm font-bold mb-2">نام</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded-md text-right focus:ring focus:ring-[#0eb79b] border-gray-300"
              placeholder="نام خود را وارد کنید"
            />
          </div>
          <div>
            <label dir="rtl" htmlFor="email" className="block text-sm font-bold mb-2">ایمیل</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded-md text-right focus:ring focus:ring-[#0eb79b] border-gray-300"
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>
          <div>
            <label dir="rtl" htmlFor="phone" className="block text-sm font-bold mb-2">شماره تلفن</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full p-2 border rounded-md text-right focus:ring focus:ring-[#0eb79b] border-gray-300"
              placeholder="شماره تلفن خود را وارد کنید"
            />
          </div>
          <div>
            <label dir="rtl" htmlFor="message" className="block text-sm font-bold mb-2">پیام</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border rounded-md text-right focus:ring focus:ring-[#0eb79b] border-gray-300"
              placeholder="پیام خود را وارد کنید"
              rows="4"
            ></textarea>
          </div>
          <button
            className="bg-[#0eb79b] hover:bg-[#4b8d82] text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
          >
            ارسال پیام
          </button>
        </form>
  
      </div>
    );
  }
  
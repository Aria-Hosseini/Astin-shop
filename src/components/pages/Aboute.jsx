export default function Aboute() {
    return (
      <div className="flex flex-col items-center justify-center h-screen about-page bg-gray-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-6 text-center">درباره ما</h1>      
       
        <div className="text-gray-700 mb-6 text-justify">
          <p dir="rtl" className="mb-4">
            ما یک تیم پرشور و مبتکر هستیم که در زمینه ارائه محصولات با کیفیت و خدمات استثنایی به مشتریان فعالیت می‌کنیم. هدف ما ایجاد تجربه‌ای متفاوت و به یادماندنی برای مشتریان از طریق ارائه محصولاتی است که نیازها و انتظارات آنها را به بهترین شکل برآورده کند.
          </p>
          <p className="mb-4">
            از زمان تأسیس در سال [سال تأسیس]، ما همواره در تلاش بوده‌ایم تا با نوآوری و پیشرفت مستمر، جایگاه برجسته‌ای در صنعت خود پیدا کنیم. تیم ما متشکل از متخصصان متعهد و حرفه‌ای است که با شور و اشتیاق به دنبال خلق ارزش برای مشتریان هستند.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 dir='rtl' className="text-xl font-bold mb-4 text-center">مأموریت ما</h2>
          <p className="text-gray-700 text-justify">
            مأموریت ما ارائه محصولاتی با کیفیت بالا و قیمت مناسب است که به زندگی مشتریان ارزش افزوده کند و رضایت آنها را جلب نماید.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-center">چشم‌انداز ما</h2>
          <p dir="rtl" className="text-gray-700 text-justify">
            چشم‌انداز ما تبدیل شدن به یکی از پیشروان صنعت و ایجاد اعتماد و ارتباط پایدار با مشتریان است.
          </p>
        </div>

      </div>
    );
  }
  
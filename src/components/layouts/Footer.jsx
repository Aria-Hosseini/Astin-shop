export default function Footer () {
    return(
        <div>
            <footer className="bg-[#0EB79B] text-white p-4 flex flex-wrap items-center justify-between flex-row-reverse shadow-2xl mt-5">
            <div className="text-center w-full md:w-auto">
                <p className="text-lg font-bold">فروشگاه</p>
                <p className="text-sm">© {new Date().getFullYear()} تمامی حقوق محفوظ است</p>
            </div>
            
            <div className="w-100 flex flex-row-reverse space-x-5 space-x-reverse">
                <a href="/privacy-policy" className="cursor-pointer text-white hover:text-[#4b8d82]">حریم خصوصی</a>
                <a href="/terms-of-service" className="cursor-pointer text-white hover:text-[#4b8d82]">شرایط استفاده</a>
                <a href="/help" className="cursor-pointer text-white hover:text-[#4b8d82]">راهنما</a>
            </div>
            
            <div className="flex items-center space-x-2 space-x-reverse">
                <span>با ما در ارتباط باشید:</span>
                <svg className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 6.5a3.5 3.5 0 01-5-5M15 9l-3-3-6 6v3h3l6-6z" />
                </svg>
            </div>

            </footer>
        </div>
    )
}
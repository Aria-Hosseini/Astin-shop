export default function Footer () {
    return(
        <div>
            <footer className="bg-[#0EB79B] text-white p-4 flex flex-wrap items-center justify-between flex-row-reverse shadow-2xl mt-5">
                <div className="text-center w-full md:w-auto">
                    <p className="text-lg font-bold">فروشگاه آستین</p>
                    
                </div>
                
                <div className="w-100 flex flex-row-reverse space-x-5 space-x-reverse">
                    <a href="/privacy-policy" className="cursor-pointer text-white hover:text-[#4b8d82]">حریم خصوصی</a>
                    <a href="/terms-of-service" className="cursor-pointer text-white hover:text-[#4b8d82]">شرایط استفاده</a>
                    <a href="/help" className="cursor-pointer text-white hover:text-[#4b8d82]">راهنما</a>
                </div>
                
                <div className="flex items-center space-x-2 space-x-reverse">
                <p className="text-sm">© made with ❤ by vihan</p>
                </div>
            </footer>
        </div>
    )
}

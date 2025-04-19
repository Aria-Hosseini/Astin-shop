import React from 'react';
import { useNavigate ,Link } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
  return (
    <header className="bg-[#0eb79b] text-white p-4 flex items-center justify-between flex-row-reverse shadow-2xl">
     
      <Link to={"/"} ><div className="text-lg font-bold">آستین شاپ</div></Link>

        <div className='w-100 flex flex-row-reverse space-x-5  '>
            <button className='cursor-pointer' >دسته بندی</button>
            <button className='cursor-pointer' onClick={()=>{navigate("/shop")}}>فروشگاه</button>
            <button className='cursor-pointer' onClick={()=>{navigate("/aboute")}}>درباره ما</button>
            <button className='pr-5 cursor-pointer' onClick={()=>{navigate("/contact-us")}}>تماس با ما</button>

        </div>
      
        <form className="w-100 mx-auto">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">جستجو</label>
            <div className="relative">
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#0eb79b] hover:bg-[#4b8d82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">جستجو</button>

                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input dir='rtl' type="search" id="default-search" className="block w-full p-4 pr-25 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" جستجو کن..." required />
            </div>
        </form>

      <div className='flex flex-row items-center justify-center spce-x-10'>

        <div className='mr-8'>
          <button className='h-10 w-30 text-sm bg-amber-50 text-black rounded-lg cursor-pointer'>ورود / ثبت نام</button>
        </div>

        <Link to={"/cart"}>
        <div className="">
          <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg>
        </div>
        </Link> 

      </div>
      

     
      <div className="md:hidden">
        <button className="bg-blue-700 px-3 py-2 rounded">منو</button>
      </div>
    </header>
  );
}

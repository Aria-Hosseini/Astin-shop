export default function Cards(props) {
    return (
        <div className="flex items-center justify-center mt-5 p-2">
            <div className="flex flex-col items-center bg-white border border-gray-200 shadow-lg rounded-xl w-60 ">
            <img
                className="w-35 h-40 rounded-t-xl"
                src={props.products.imgurl}
                alt="Card Image"
            />
            <div className="p-3">
                <h3 dir="rtl" className="text-base font-bold text-gray-800">
                    {props.products.title}
                </h3>
                <p dir="rtl" className="mt-1 text-sm text-gray-500">
                   <span>{props.products.price}تومان</span> 
                </p>
                <a
                    className="mt-2 p-2 inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                >
                    افزودن به سبد
                </a>
            </div>
        </div>

        </div>
        
    );
}

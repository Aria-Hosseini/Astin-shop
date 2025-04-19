import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="h-screen mx-auto p-5 border border-gray-200 rounded-lg mt-5 flex flex-col items-center justify-center">
                <div className="text-center text-gray-600">
                    <h2 className="text-xl font-bold text-gray-800">سبد خرید شما خالی است</h2>
                    <p className="mt-2">برای شروع خرید، محصولات مورد نظر خود را اضافه کنید!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center w-300 mx-auto">
            <h2 dir='rtl' className="text-2xl font-bold mb-5">سبد خرید</h2>
            <div className="space-y-4 w-full">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-row-reverse items-center justify-between p-4 border rounded-lg">
                        <div className="flex flex-row-reverse items-center space-x-4 space-x-reverse">
                            <Link to={`/product/${item.id}`}>
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-20 h-20 object-cover rounded hover:opacity-80 transition-opacity"
                                />
                            </Link>
                            <div className="text-right">
                                <Link to={`/product/${item.id}`} className="hover:text-blue-600 transition-colors">
                                    <h3 className="font-semibold">{item.name}</h3>
                                </Link>
                                <p className="text-gray-600">{item.price} تومان</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="px-2 py-1 border rounded cursor-pointer"
                                >
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="px-2 py-1 border rounded cursor-pointer"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 cursor-pointer"
                            >
                                حذف
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5 p-4 border rounded-lg w-full">
                <h3 className="text-xl font-bold">
                    مجموع: {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)} تومان
                </h3>
                <button className="cursor-pointer w-full mt-4 bg-[#0eb79b] hover:bg-[#4b8d82] text-white font-bold py-2 px-4 rounded-lg transition duration-200">
                    ادامه
                </button>
            </div>
        </div>
    );
}

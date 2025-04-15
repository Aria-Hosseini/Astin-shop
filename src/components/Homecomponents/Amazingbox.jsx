import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Cards from "../cards/Cards";
import './style.css';

export default function Amazingbox() {
    const [Product, setProduct] = useState([]);
    const carouselRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0); 
    const scrollLeft = useRef(0); 

    useEffect(() => {
        axios.get("http://localhost:4565/products").then((result) => {
            setProduct(result.data.data);
        });
    }, []);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - carouselRef.current.offsetLeft;
        scrollLeft.current = carouselRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return; 
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        carouselRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        isDragging.current = false; 
    };

    return (
        <div className="flex flex-col items-center justify-center mt-4">
            <div
                className="flex flex-row items-center bg-rose-700 w-261 rounded-2xl p-4 overflow-hidden"
                onMouseLeave={handleMouseUp}
            >
                <div
                    ref={carouselRef}
                    className="flex flex-row space-x-3 overflow-x-scroll scrollbar-hide w-full"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                >
                    {Product.map((result) => (
                        <Cards key={result.id} products={result} />
                    ))}
                </div>
                <div className="flex-shrink-0">
                    <span className="text-amber-50 text-2xl font-bold pl-2">
                        پیشنهاد شگفت‌انگیز
                    </span>
                </div>
            </div>
        </div>
    );
}

import { useEffect, useState } from "react"
import Category from "../Homecomponents/Category"
import Slider from "../Homecomponents/Slider"
import Cards from "../cards/Cards"
import axios from "axios"
import Amazingbox from "../Homecomponents/Amazingbox"

export default function Home (){


    const [Products , setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4565/products").then(result => {
            setProducts(result.data.data)
        });

    },[]);

    return(
        <div>
            <Slider />
            <Category />
            <div className="flex flex-row space-x-3 justify-center">
                
                { Products.map( (result) => (<Cards products={result} />))}
                
            </div>
            <Amazingbox />
            <div className="flex flex-row space-x-3 justify-center">
                {Products.map((show)=>(<Cards products={show} />))}
            </div>
            
        </div>
    )
}
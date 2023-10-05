import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cardPic1 from "../../../assets/1.png"
import cardPic2 from "../../../assets/2.png"
import cardPic3 from "../../../assets/3.png"

const LeftSideMap = () => {

    const [categories, setCategories] =useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div className="space-y-7">
                <h2 className="text-2xl font-semibold">All Categories</h2>
                    {
                        categories.map(category => <Link className="block ml-3 text-xl font-semibold" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
                    }

            </div>

            <div>
               <img className="mt-4" src={cardPic1} alt="" />
               <p className="font-semibold text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
               <div className="flex gap-8">
                   <p className="font-medium">Sports</p>
                   <p className="text-gray-500 font-medium">Jan 4, 2022</p>
               </div>
            </div>
            <div>
               <img className="mt-4" src={cardPic2} alt="" />
               <p className="font-semibold text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
               <div className="flex gap-8">
                   <p className="font-medium">Sports</p>
                   <p className="text-gray-500 font-medium">Jan 4, 2022</p>
               </div>
            </div>
            <div>
               <img className="mt-4" src={cardPic3} alt="" />
               <p className="font-semibold text-xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
               <div className="flex gap-8">
                   <p className="font-medium">Sports</p>
                   <p className="text-gray-500 font-medium">Jan 4, 2022</p>
               </div>
            </div>
            
        </div>
        
    );
};

export default LeftSideMap;
import { useEffect } from "react";
import { useState } from "react";
import Food from "./Food";

export default function Foods({handleWantToCook}) {

    
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch("food-data.json")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div className="lg:w-2/3 border border-slate-500 rounded-xl grid md:grid-cols-2 gap-8 p-6">
            {
                foods.map(
                    (food, idx) => <Food key={idx} food={food}></Food>
                )
            }
        </div>
    )

}
import { useEffect } from "react";
import { useState } from "react";
import Food from "./Food";

export default function Foods() {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch("food-data.json")
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div className="md:w-2/3 border grid md:grid-cols-2 gap-8">
            {
                foods.map(
                    (food, idx) => <Food key={idx} food={food}></Food>
                )
            }
        </div>
    )

}
import { FaRegClock } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";


export default function Food({ food }) {

    // console.log(food)
    const { calories, description, food_image, food_name, time, ingredients } = food;

    return (
        <div className="max-w-[400px] max-h-[685px] space-y-3 p-6 light-dark rounded-xl border-gray-500 mx-auto md:mx-0">
            {/**/}
            <img className="max-w-96 w-full rounded-xl" src={food_image} alt="" />
            <h3 className="text-2xl font-bold">{food_name}</h3>
            <p className="">{description.slice(0, 60)}...</p><hr />
            <div>
                <h3 className="text-xl font-bold">Ingredients: {ingredients.length}</h3>
                <ul className="list-disc">
                    {
                        ingredients.slice(0, 3).map(
                            (ingredient, idx) => <li key={idx}>{ingredient}</li>
                        )
                    }
                </ul>
            </div><hr />
            <div className="flex justify-between">
                <div className="flex items-center gap-1"><FaRegClock />{time} minutes</div>
                <div className="flex items-center gap-1"><SlEnergy />
                    {calories} calories</div>
            </div>
            <button className="btn ">Want to cook</button>
        </div>
    )
}
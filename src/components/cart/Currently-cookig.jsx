export default function CurrentlyCooking({ currentCookingFoods }) {
    // console.log(currentCookingFoods)

    return (
        <div className="mt-12">
            <h3 className='text-center font-black text-xl mb-2'>Currenly cooking: {currentCookingFoods.length}</h3><hr />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentCookingFoods.map(
                            (food, idx) => <CurrentCookingFood
                                key={idx}
                                food={food}
                            ></CurrentCookingFood>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

function CurrentCookingFood({food}) {

    const { food_name, time, calories } = food;


    return (
        <tr>
            <td>{food_name}</td>
            <td>{time}</td>
            <td>{calories} Calories</td>
        </tr>
    )
}
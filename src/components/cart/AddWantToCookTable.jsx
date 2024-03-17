export default function AddWantCookTable({ food, handlePreparing, index}) {

    const { food_name, time, calories } = food;


    return (
        <tr>
            <td>{index+1}</td>
            <td>{food_name}</td>
            <td>{time}</td>
            <td>{calories} Calories</td>
            <td><button
                className="btn2"
                onClick={() => handlePreparing(food)}
            >Preparing</button></td>
        </tr>
    )
}
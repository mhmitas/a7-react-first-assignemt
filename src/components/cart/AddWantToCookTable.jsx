export default function AddWantCookTable({ food, handlePreparing }) {

    const { food_name, time, calories } = food;


    return (
        <tr>
            <td>{food_name}</td>
            <td>{time}</td>
            <td>{calories}</td>
            <td><button
                className="btn2"
                onClick={() => handlePreparing(food)}
            >Preparing</button></td>
        </tr>
    )
}
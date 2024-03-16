export default function AddWantCookTable({ food }) {

    const { food_name, time, calories } = food;


    return (
        <tr>
            <td>{food_name}</td>
            <td>{time}</td>
            <td>{calories}</td>
            <td><button  className="btn2">Preparing</button></td>
        </tr>
    )
}
import './cart-food.css'

export default function CartFood({ wantToCook }) {

    // const { food_name, time, calories } = wantToCook;
    // console.log(wantToCook)

    return (
        <div className="lg:w-1/3 border p-6 border-slate-500 rounded-xl">
            <div>
                <h3 className='text-center font-black text-xl mb-2'>Want to cook: <span>0</span></h3>
                <hr />
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </table>
                <table>
                    {
                        
                    }
                </table>
            </div>
            <div></div>
        </div>
    )
}
import AddWantCookTable from './AddWantToCookTable'
import './cart-food.css'

export default function CartFood({ wantToCook }) {

    // console.log(wantToCook)

    return (
        <div className="lg:w-1/3 border p-6 border-slate-500 rounded-xl h-max">
            <div>
                <h3 className='text-center font-black text-xl mb-2'>Want to cook: {wantToCook.length}</h3>
                <hr />
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
                            wantToCook.map(
                                (food, idx) => <AddWantCookTable
                                    key={idx}
                                    food={food}
                                ></AddWantCookTable>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div></div>
        </div>
    )
}
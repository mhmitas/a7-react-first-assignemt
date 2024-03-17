export default function CurrentlyCooking() {
    return (
        <div className="mt-12">
            <h3 className='text-center font-black text-xl mb-2'>Currenly cooking</h3><hr />
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
                        // wantToCook.map(
                        //     (food, idx) => <AddWantCookTable
                        //         key={idx}
                        //         food={food}
                        //         handlePreparing={handlePreparing}
                        //     ></AddWantCookTable>
                        // )
                    }
                </tbody>
            </table>
        </div>
    )
}
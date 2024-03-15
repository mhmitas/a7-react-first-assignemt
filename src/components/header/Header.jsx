function Header() {
    return (
        <div className=" p-6 light-dark border-b">
            <div className="max-w flex justify-between items-center">
                <h3 className='text-2xl font-black'>Recipe Calories</h3>
                <ul className='flex gap-4'>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
                <div>
                    <img src="src\assets\Frame 5.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header
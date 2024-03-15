function Banner() {
    return (
        <div className="banner max-w h-[600px] my-14  rounded-xl">
            <div className="flex flex-col justify-center items-center *:text-center bg-[#0e0e0e6e] h-full space-y-8 rounded-xl">
                <h3 className="text-3xl font-extrabold">Discover an exceptional cooking <br />class tailored for you!</h3>
                <p className="max-w-[900px]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex gap-12">
                    <button className="btn">Explore Now</button>
                    <button className="btn">Our feedback</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
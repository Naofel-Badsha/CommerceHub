import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <section className="px-4">
            <div className="flex items-center justify-center flex-col lg:flex-row min-h-screen">
                <div className="">
                    <img src="https://i.ibb.co.com/yn90MsZW/b-B7-STQs-PRF.gif" alt="" />
                </div>

                <div className="space-y-5">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl">Page not found</h1>
                    <p className="text-[18px]">Sorry, we couldn't find the page you're looking for.</p>
                    <div className="flex items-center gap-4">
                        <Link to={"/"}>
                            <button className="bg-[#00B3B0] py-3.5 px-6 text-white hover:bg-[#233238] rounded-full cursor-pointer transition-colors duration-300">
                                Go back home
                            </button>
                        </Link>
                        <button className="border border-[#233238] py-3.5 px-6 text-[#233238] hover:text-white hover:bg-[#233238] rounded-full cursor-pointer transition-colors duration-300">Contact support →</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage

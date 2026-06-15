import { useState } from "react"
import { Link } from "react-router-dom"


const Login = () => {
  const [message, setMessage] = useState("")
  return (
    <section className="h-screen flex items-center justify-center px-5">
      <div className="bg-white shadow-md border border-gray-300 rounded-xl flex items-center flex-col lg:flex-row gap-6 p-8">

        <div className="flex-1">
          <img src="https://i.ibb.co.com/4Z5nvHVL/y-Rmx-Ugvz-A6.gif" alt="Login Images" className="w-96 lg:w-full" />
        </div>

        <div className="flex-1 shadow p-6 rounded-md border border-gray-100 hover:border-[#00B3B0]">
          <h2 className="text-2xl font-semibold">Please Login</h2>
          <form action="" className="space-y-6 mt-6">
            <input type="email" placeholder="Email" required className="w-full text-gray-800 bg-gray-100 py-3 px-3 focus:outline-none rounded-md" />
            <input type="password" placeholder="Pasdword" required className="w-full text-gray-800 bg-gray-100 py-3 px-3 focus:outline-none rounded-md" />
            {
              message && <p className="text-red-500">{message}</p>
            }
            <button className="w-full mt-2 bg-[#00B3B0] py-3.5 px-6 text-white hover:bg-[#233238] rounded-full cursor-pointer transition-colors duration-300">Login</button>
            <p className="text-center">Don't have an account <Link to={"/singup"} className="text-[#00B3B0] underline">Register</Link></p>
            <div className="flex gap-4 items-center justify-center">
              <button className="bg-gray-100 p-2 shadow rounded-full border border-gray-100 hover:border-[#00B3B0] cursor-pointer transition duration-300">
                <img className="w-[40px]" src="https://i.ibb.co.com/KcPsqW26/google-icon.png" alt="Google Icon" />
              </button>
              <button className="bg-gray-100 p-2 shadow rounded-full border border-gray-100 hover:border-[#00B3B0] cursor-pointer transition duration-300">
                <img className="w-[40px]" src="https://i.ibb.co.com/0y3VYPW2/facebook-icon.png" alt="facebook Icon" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Login

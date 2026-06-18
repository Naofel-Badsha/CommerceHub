import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <section className="h-screen flex items-center justify-center px-5">
      <div className="bg-white shadow-md border border-gray-300 rounded-xl flex items-center flex-col lg:flex-row gap-6 p-8">

        <div className="flex-1">
          <img src="https://i.ibb.co.com/4Z5nvHVL/y-Rmx-Ugvz-A6.gif" alt="Login Images" className="w-96 lg:w-full" />
        </div>

        <div className="flex-1 shadow p-6 rounded-md border border-gray-100 hover:border-[#00B3B0]">
          <h2 className="text-2xl font-semibold">Please Register</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
            {/*--------Email-----Field---------*/}
            <input
              {...register("username", { required: true })}
              type="text" placeholder="Full name" className="w-full text-gray-800 bg-gray-100 py-3 px-3 focus:outline-none rounded-md" />
            {/*-------Show Error message in react-hook-form-------  */}
            {errors.email && <p className="text-red-500">This name is required,</p>}


            {/*--------Email-----Field---------*/}
            <input
              {...register("email", { required: true })}
              type="email" placeholder="Email" className="w-full text-gray-800 bg-gray-100 py-3 px-3 focus:outline-none rounded-md" />
            {/*-------Show Error message in react-hook-form-------  */}
            {errors.email && <p className="text-red-500">This email is required,</p>}


            {/*--------Password-----Field---------*/}
            <input
              {...register("password", { required: true })}
              type="password" placeholder="Password" className="w-full text-gray-800 bg-gray-100 py-3 px-3 focus:outline-none rounded-md " />
            {/*-------Show Error message in react-hook-form-------  */}
            {errors.password && <p className="text-red-500">This password is required</p>}

            <button className="w-full mt-4 bg-[#00B3B0] py-3.5 px-6 text-white hover:bg-[#233238] rounded-full cursor-pointer transition-colors duration-300">Login</button>
            <p className="text-center">Allreay have an account <Link to={"/login"} className="text-[#00B3B0] underline">Login</Link> here.</p>

            <div className="flex gap-4 items-center justify-center mt-6">
              <button className="bg-gray-100 p-2 shadow rounded-full border border-gray-100 hover:border-[#00B3B0] cursor-pointer transition duration-300">
                <img className="w-[35px]" src="https://i.ibb.co.com/KcPsqW26/google-icon.png" alt="Google Icon" />
              </button>
              <button className="bg-gray-100 p-2 shadow rounded-full border border-gray-100 hover:border-[#00B3B0] cursor-pointer transition duration-300">
                <img className="w-[35px]" src="https://i.ibb.co.com/0y3VYPW2/facebook-icon.png" alt="facebook Icon" />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Register

import React, {useState, useEffect, useRef} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    
    const create = async(data) => {
        setError("")
        try {
            console.log("------>>",data)
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    // <div className="flex items-center justify-center">
    //         <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
    //         <div className="mb-2 flex justify-center">
    //                 <span className="inline-block w-full max-w-[100px]">
    //                     <Logo width="100%" />
    //                 </span>
    //             </div>
    //             <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
    //             <p className="mt-2 text-center text-base text-black/60">
    //                 Already have an account?&nbsp;
    //                 <Link
    //                     to="/login"
    //                     className="font-medium text-primary transition-all duration-200 hover:underline"
    //                 >
    //                     Sign In
    //                 </Link>
    //             </p>
    //             {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

    //             <form onSubmit={handleSubmit(create)}>
    //                 <div className='space-y-5'>
    //                     <Input
    //                     label="Full Name: "
    //                     placeholder="Enter your full name"
    //                     {...register("name", {
    //                         required: true,
    //                     })}
    //                     />
    //                     <Input
    //                     label="Email: "
    //                     placeholder="Enter your email"
    //                     type="email"
    //                     {...register("email", {
    //                         required: true,
    //                         validate: {
    //                             matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    //                             "Email address must be a valid address",
    //                         }
    //                     })}
    //                     />
    //                     <Input
    //                     label="Password: "
    //                     type="password"
    //                     placeholder="Enter your password"
    //                     {...register("password", {
    //                         required: true,})}
    //                     />
    //                     <Button type="submit" className="w-full">
    //                         Create Account
    //                     </Button>
    //                 </div>
    //             </form>
    //         </div>

    // </div>
    <div className = "flex items-center justify-center ">
    <div className="max-w-md w-full bg-gradient-to-r from-blue-700 to-white-400 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 animate-slideInFromLeft">
    <h2 className="text-center text-4xl font-extrabold text-white animate-appear">Welcome</h2>
    <p className="text-center text-gray-200 animate-appear">Sign Up to your account</p>
    <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
        <Logo width="100%" />
        </span>
    </div>
    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
    <form onSubmit={handleSubmit(create)} className="space-y-6">
    <div className="relative">
            <input
                placeholder="John Deb"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required=""
                id="name"
                name="name"
                {...register("name", {
                    required: true
                })}
            />
            <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
            >
                Full Name
            </label>
        </div>
        <div className="relative">
            <input
                placeholder="john@example.com"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required=""
                id="email"
                name="email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
            />
            <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="email"
            >
                Email address
            </label>
        </div>
        <div className="relative">
            <input
                placeholder="Password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required=""
                id="password"
                name="password"
                type="password"
                {...register("password", {
                    required: true,
                })}
            />
            <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm"
                htmlFor="password"
            >
                Password
            </label>
        </div>
        <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
                <input
                    className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded"
                    type="checkbox"
                />
                <span className="ml-2">Remember me</span>
            </label>
        </div>
        <button
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-800 rounded-md shadow-lg text-white font-semibold transition duration-200"
            type="submit"
        >
            Create Account
        </button>
    </form>
    <div className="text-center text-gray-300">
        Already have an account?
        <Link to="/signup" className="text-purple-300 hover:underline">
            Login
        </Link>
    </div>
</div>
</div>
  )
}

export default Signup
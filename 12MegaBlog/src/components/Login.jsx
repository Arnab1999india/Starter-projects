import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className = "flex items-center justify-center ">
    <div className="max-w-md w-full bg-gradient-to-r from-blue-700 to-white-400 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 animate-slideInFromLeft">
    <h2 className="text-center text-4xl font-extrabold text-white animate-appear">Welcome</h2>
    <div className="mb-2 flex justify-center">
        <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
        </span>
    </div>
    <p className="text-center text-gray-200 animate-appear">Sign in to your account</p>
    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
    <form onSubmit={handleSubmit(login)} className="space-y-6">
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
            <a className="text-sm text-purple-200 hover:underline" href="#">
                Forgot your password?
            </a>
        </div>
        <button
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-800 rounded-md shadow-lg text-white font-semibold transition duration-200"
            type="submit"
        >
            Sign In
        </button>
    </form>
    <div className="text-center text-gray-300">
        Don't have an account?
        <Link to="/signup" className="text-purple-300 hover:underline">
            Sign up
        </Link>
    </div>
</div>
</div>
  )
}

export default Login
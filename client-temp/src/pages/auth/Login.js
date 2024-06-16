import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { token } from 'morgan';
// import { useAuth } from '../../Contexts/auth.js';

//import GoogleLogin from './GoogleLoginButton.js';
//import {gapi} from 'gapi-script';
//import GoogleLoginButton from './GoogleLoginButton.js';

//const clientId = "1067917431696-51irs5hnbtupemu1dtjbn787p25s7ag9.apps.googleusercontent.com" ;
const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [auth, setAuth] = useAuth();



    const handleUseremailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Add your login logic here
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/login',{email,password});
            if(res.data.success){
                console.log("Succesfully registered!!");
                // setAuth({
                //     ...auth,
                //     user: res.data.user,
                //     token: res.data.token,
                //   });
                // localStorage.setItem("auth", JSON.stringify(res.data));
                navigate('/');

            }
            // navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(()=>{
    //     function start (){
    //         gapi.client.getAuth({
    //             clientId:clientId,
    //             scope:"",
    //         })
    //     };
    //     gapi.load('client:auth2',start);
    // })

    return (
        <section className= "">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                    Sign in
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                    Don&#x27;t have an account?{" "}
                    <Link
                        to="/register"
                        className="font-semibold text-black transition-all duration-200 hover:underline"
                    >
                        Create a free account
                    </Link>
                    </p>
                    <form onSubmit={handleSubmit} className="mt-8">
                    <div className="space-y-5">
                        <div>
                        <label htmlFor="" className="text-base font-medium text-gray-900">
                            {" "}
                            Email address{" "}
                        </label>
                        <div className="mt-2">
                            <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleUseremailChange}
                            />
                        </div>
                        </div>
                        <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="" className="text-base font-medium text-gray-900">
                            {" "}
                            Password{" "}
                            </label>
                            <Link
                            to={'/forgot-password'}
                            title=""
                            className="text-sm font-semibold text-black hover:underline"
                            >
                            {" "}
                            Forgot password?{" "}
                            </Link>
                        </div>
                        <div className="mt-2">
                            <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            />
                        </div>
                        </div>
                        <div>
                        <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                            onClick={handleSubmit}
                        >
                            Get started{" "}
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2"
                            >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                <div className="h-full w-full flex items-start">
                <img
                    className="mx-auto h-[75%] w-[90%] rounded-md object-cover mt-16"
                    src="https://cdn.dribbble.com/users/1097584/screenshots/5667601/media/f2f87250f97723f9a2ea522d16189fce.jpg?resize=1200x900&vertical=center"
                    alt=""
                />
                </div>
            </div>
        </section>


    );
};

export default Login;
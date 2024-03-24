import React, {FC, useState} from "react";
import { Link } from "react-router-dom";
import {CustomLoginToaster, CustomToaster} from '../../CustomToaster';
import { ToastContainer, toast } from 'react-toastify';
import { reqLogin } from "../../async/UserRequests";

type LoginFormData = {
    email:string,
    password: string,
    repeatedPassword: string,
}

function Login <FC> (){
 
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
        repeatedPassword: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
   
    
    
    const handleSubmit = async (formData:LoginFormData) => {
        if(formData.password != formData.repeatedPassword){
            toast.error(`Passwords doesn't match`);
            return;
        }
        const request = reqLogin(formData);
        CustomLoginToaster(request)
        .then(()=>{
            
            window.location.href = '/AdoptionService';
        })
        .catch((err)=>{
            console.log(err);
           
        })
        .finally(()=>{
            setFormData({
                email: "",
                password: "",
                repeatedPassword: ""
            })
        })
    }

    return(
      
        <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
            <ToastContainer autoClose={1500}/>
        	<div className="min-w-[440px] bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        		<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
        	
        			<div className="mb-4">
        				<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
        				<input onChange={handleChange} name="email" value={formData.email} type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
        			</div>
                    <div className="mb-4">
        				<label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
        				<input onChange={handleChange} name="password" value={formData.password} type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
        			
        			</div>
        			<div className="mb-4">
        				<label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Repeat Password</label>
        				<input onChange={handleChange} name="repeatedPassword" value={formData.repeatedPassword} type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Repeat your password" required />
        				<a href="#"
        					className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
        					Password?</a>
        			</div>
        			<div className="flex items-center justify-between mb-4">
        				<div className="flex items-center">
        					<input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked />
        					<label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
        				</div>
        				<Link to="/registration" className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create account</Link>
        			</div>
        			<button onClick={()=>handleSubmit(formData)} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
        	
        	</div>
        </div>
    );
}


export default Login;
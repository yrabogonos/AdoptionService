import React, {FC} from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reqRegister } from "../../async/UserRequests";
import {TypeRegisterData} from '../../Types';
import {CustomToaster} from '../../CustomToaster';
import { Link } from "react-router-dom";





const RegistrationForm: FC = () => {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
   
    
    
    const handleSubmit = async (formData:TypeRegisterData) => {
  
        const request = reqRegister(formData);
        CustomToaster(request)
        .then(()=>{
            setFormData({
                fullname: "",
                email: "",
                password: ""
            })
            window.location.href += '/confirm';
        })
        .catch((err)=>{
            console.log(err)
        });
      
       
        
     
        // setFormData({
        //     fullname: "",
        //     email: "",
        //     password: ""
        // })
    };

        

    return(
      
        <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
            <ToastContainer autoClose={1500}/>
        	<div className=" min-w-[440px] bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        		<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">New here? Register!</h1>
        		
                    <div className="mb-4">
        				<label htmlFor="fullname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
        				<input onChange={handleChange} type="text" id="fullname" name="fullname" value={formData.fullname} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="John Smith" required />
        			</div>
        			<div className="mb-4">
        				<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
        				<input name="email" onChange={handleChange} type="email" value={formData.email} id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
        			</div>
        			<div className="mb-4">
        				<label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
        				<input name="password" onChange={handleChange} type="password" value={formData.password} id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
        				
        			</div>
        			<div className="flex items-center justify-between mb-8">
        				<div className="flex items-center">
        					<input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked />
        					<label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
        				</div>
        				<Link to="/login" className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Have account?</Link>
        			</div>
        			<button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={()=>handleSubmit(formData)}>Create account</button>
        	
        	</div>
        </div>
   
    );
};

export default RegistrationForm;
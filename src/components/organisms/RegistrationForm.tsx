import React, {FC} from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reqRegister } from "../../async/UserRequests";
import {TypeRegisterData} from '../../Types';
import {CustomToaster} from '../../CustomToaster';




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
        <div className="pl-base pr-base mt-12 mb-24">
            <ToastContainer autoClose={1500}/>
            <h3 className="text-[34px] font-bold">Registration</h3>
            <div className="mt-12 flex flex-col items-center">
                <div className="flex flex-col ">
                    <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Full name</label>
                    <input name="fullname" value={formData.fullname} required type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} />
                </div>
                <div className="flex flex-col ">
                    <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
                    <input name="email" value={formData.email} required type="email" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={ handleChange}  />
                </div>
                <div className="flex flex-col mb-6 ">
                    <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Password</label>
                    <input name="password" value={formData.password} required type="password" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} />
                </div>

                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>handleSubmit(formData)}>
                Create Account
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </button>



            </div>
           
        </div>
    );
};

export default RegistrationForm;
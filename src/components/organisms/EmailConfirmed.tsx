import React, {FC, useEffect} from "react";
import confirmed from '../../assets/icons/emailconfirmed.png';
import {updateStatus} from '../../async/UserRequests';
import { ToastContainer, toast } from 'react-toastify';


function EmailConfirmed<FC> (){

    const token = window.localStorage.getItem('jwt');

    useEffect(()=>{
        if(token){
            updateStatus(token)
            .catch((err)=>{
                console.log(err);
                toast.error('Some error occured', {
                    theme: "colored",
                })
            })
        }
    })

    return(
        <div className="flex flex-col justify-center items-center pt-12 pb-12 gap-4">
            <ToastContainer />
            <img className="w-[200px] h-[200px]" src={confirmed} alt="confirmed" />
            <p className="text-[24px]">Confirmed</p>
            <button onClick={()=>{
                window.location.href = '/AdoptionService';
            }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Continue
                <svg className=" pl-2 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                   Continue
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                
            </button>
        </div>
    )
}

export default EmailConfirmed;
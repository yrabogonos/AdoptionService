import Reac, {FC, useEffect, useState} from "react";
import mail from '../../assets/img/mail.png';
import {getUser,sendEmail} from '../../async/UserRequests';
import { ToastContainer, toast } from 'react-toastify';

type UserType = {
    fullname: string,
    email: string,
}

function EmailConfirmation<FC> (){

    const [user, SetUser] = useState<UserType | null>(null);
    const token = window.localStorage.getItem('jwt');

    if(token && !user){
        getUser(token)
        .then((response) =>{
            console.log(response.statusText)
            if(response.statusText === 'OK'){
                let user = {
                   email: response.data.email,
                   fullname: response.data.fullname
                };
             
                SetUser(user);
            }
        })
        .catch((err) =>{
            console.log(err)
            toast.error('Some error occured', {
                theme: "colored",
            })
        })
    }

    const ConfirmHandler = async ()=>{
      
        if(token){
            sendEmail(token)
            .then((response)=>{
                
                if(response.statusText === 'Created'){
                    toast.info('Email was sent')
                }
            })
            .catch((err)=>{
                console.log(err);
                toast.error('Some error occured', {
                    theme: "colored",
                })
            })
        }
        
    }
   




    return(
        <div className="flex flex-col justify-center items-center pt-12 pb-12 gap-4">
            <ToastContainer />
            <img className="w-[170px] h-[170px]" src={mail} alt="email" />
            <p className="text-[24px]">Hi! {user?.fullname}</p>
            <p className="text-lg">Welcome to PetFinder!</p>
            <p>We have sent you confirmation letter on {user?.email}</p>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={ConfirmHandler}>
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Confirm Your Email
            </span>
            </button>
        </div>
    )

}

export default EmailConfirmation;
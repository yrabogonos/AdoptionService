import React, {FC, useState} from "react";
import prob from '../../assets/img/prob.webp';
import {User} from '../../Types';
import { UserStore } from "../../Stores/userStore";




const ProfileDropdown: FC = () =>{

    const [isOpen, setOpen] = useState(false);
    const { user, fetchUser } = UserStore(); 

    

    return(
       <div onMouseLeave={()=>{setOpen(false)}}>
        <img id="avatarButton" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-12 h-12 rounded-full cursor-pointer " src={ user?.avatar? user?.avatar: prob} alt="User dropdown" onClick={()=>{
            setOpen((prev)=>!prev)
        }}/>

    
        <div id="userDropdown" className={`z-10 ${isOpen ? '' : 'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`} >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{user?.fullname}</div>
              <div className="font-medium truncate">{user?.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Follows</a>
              </li>
              
            </ul>
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </div>
        </div>
    </div>
    );
}


export default ProfileDropdown;
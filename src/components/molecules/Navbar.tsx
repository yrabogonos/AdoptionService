import React, {FC} from "react";
import logo from '../../assets/icons/logotype.png';

function Navbar<FC>(){

    return(
        <div className="w-full bg-transparent h-auto pt-8 pb-6">
          <div className="flex justify-between">
             <div className="flex items-center gap-2">
                <img src={logo} alt="Logotype" />
                <p className="font-bold text-white">Best Friend</p>
             </div>

             <div className="flex">
                <ul className="flex gap-12 text-white">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Adopt</a></li>
                    <li><a href="#">Get involved</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
             </div>

          </div>
        </div>
    );
}

export default Navbar;
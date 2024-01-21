import React, {FC} from "react";
import dogcat from '../../assets/img/dogcat.png';
import elipse from '../../assets/img/Ellipse.png';
import paw2 from '../../assets/img/paw2.png';

function AdoptionSection <FC>(){
    return(
        <div className="relative">
            <div className="pl-base pr-base">
                <div className="flex flex-col">

                    <h2 className="text-base font-bold text-center mb-12">YOUR NEW BEST FRIEND IS WAITING FOR YOU.</h2>

                    <div className="flex">

                        <div className="basis-1/4 pt-12">
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">ADOPT A DOG</button>
                        </div>
                        <div className="basis-2/4">
                            <img src={dogcat} alt="dog&cat" />
                        </div>
                        <div className="basis-1/4 pt-12">
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-12 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">ADOPT A CAT</button>
                        </div>

                    </div>

                </div>
            </div>
            <div className="h-[60px] overflow-hidden absolute" style={
                {
                    bottom: '0',
                    zIndex: '-1'
                }
            }>
                <img className="" src={elipse} alt="Elipse" />
            </div>
            <div className="absolute" style={
                {
                    bottom: '0'
                }
            }>
                <img className="" src={paw2} alt="Paw" />
            </div>
        </div>
    );
}

export default AdoptionSection;
import React, {FC} from "react";

type StorieProps = {
    title: string,
    text: string,
    textButton: string,
}

function Storie <FC> ({
    title,
    text,
    textButton
}:StorieProps){

    return(
        <div className="flex flex-col basis-[45%] gap-4">
            <h2 className="color-darkTitle text-normalTitle font-semibold">{title}</h2>
            <p className="text-base color-darkTitle">{text}</p>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{textButton}</button>
        </div>
    
        
    );
}

export default Storie;
import React, {FC} from "react";

type BannerButtonProps = {
    text: string,
    isReverse: boolean,
    func?: () => any
    
}

function BannerButton<FC>({text, isReverse, func}: BannerButtonProps){

    return(
        isReverse?
        <button type="button" className="py-2.5 px-14 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-transparent rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={func}>{text}</button>
        :
        <button type="button" className="py-2.5 px-14 me-2 mb-2 text-sm font-medium text-thOrange focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={func}>{text}</button>

    );

}

export default BannerButton;
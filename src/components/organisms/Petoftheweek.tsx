import React, {FC} from "react";




type PetOfTheWeekProps = {
    imageLink: string,
}
function PetOfTheWeek<FC>({imageLink} : PetOfTheWeekProps){

    return(
        <div className='pl-base pr-base pt-20 pb-20 bg-dark'>
            <div className="flex gap-48">

                <div className="basis-1/2">
                    <h4 className="text-white text-[22px] uppercase pb-2">Pet of the week</h4>
                    <h2 className="text-white text-[22px] font-bold pb-2">Toby</h2>
                    <p className="text-white text-base mb-4">Lovely Toby loves people, cuddling, toys, and giving lots of kisses! Toby is looking to find a forever home with a family who appreciates his maturity and is happy to load him up with lots of pets and belly rubs.</p>
                    <button type="button" className="w-full focus:outline-none text-white bg-thOrange hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">LEARN MORE ABOUT TOBY</button>
                </div>

                <div className="basis-1/2">
                    <img src={imageLink} className="h-5/6" alt="petoftheweek" />
                </div>

            </div>
        </div>
    );

}

export default PetOfTheWeek;
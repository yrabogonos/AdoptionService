import React, {FC} from "react";
import im1 from '../../assets/img/love1.png';
import im2 from '../../assets/img/love2.png';
import paw3 from '../../assets/img/paw3.png';
import paw4 from '../../assets/img/paw4.png';
import Storie from "../molecules/Storie";

function Stories<FC>(){

    return(
        <div className="mt-16">
          <div className="relative" style={
            {
                overflowY: 'hidden',
                
                marginBottom: '100px'
            }
          }>
           
 

            <div className="pl-base pr-base">
              <h2 className="text-center font-bold tracking-wider text-[26px] pb-4">What makes BEST FRIENDS different?</h2>
              <h4 className="text-center text-base">Best friends hosts several adoption events throughout the year. You can attend those adoption events, or schedule a meeting with us to meet your new best friends!     
            </h4>

            {/* 1 */}
            <div className="flex mt-6 justify-between items-center">
                <div className="flex mt-16 justify-between items-center">
                    <Storie title='Our loving community' text='Best Friends hosts several adoption events throughout the year. You can attend those events to meet your new best friend. Thousands of happy pets and their owners have met through Best Friends.' textButton="READ OUR STORIES" />
                

                    <div className="basis-[45%]">
                        <img src={im1} alt="im1" onMouseEnter={(e)=>{
                        e.currentTarget.style.transform = 'scale(1.1)'
                      }}
                        onMouseLeave={(e)=>{
                        e.currentTarget.style.transform = 'scale(1)'
                        }} />
                    </div>
                </div>
            </div>


            <div className="flex justify-between items-center">
                <div className="flex mt-16 justify-between items-center mb-16">

                    <div className="basis-[45%]">
                        <img src={im2} alt="im2" onMouseEnter={(e)=>{
                        e.currentTarget.style.transform = 'scale(1.1)'
                      }}
                        onMouseLeave={(e)=>{
                        e.currentTarget.style.transform = 'scale(1)'
                        }} />
                    </div>

                    <Storie title='A supportive network' text='Best Friends has a special buddy program. You can reach out and talk to Buddies who adopted from our shelter before to learn more about their experiences or ask any questions you might have.' textButton="TALK TO A BUDDY" />
                
                </div>
            </div>



            </div>


            

           



            <div className="absolute" style={
                {
                    top: '0%',
                    transform: 'scale(.8)',
                   
                }
            }>
              <img src={paw4} alt="paw3" />
            </div>
            



          </div>


          
        </div>
     






        /* <div className="absolute" style={
            {
                top: '-7%',
                transform: 'scale(.8)'
            }
        }>
            <img src={paw4} alt="paw3" />
        </div>

        <div className="pl-base pr-base">
            <h2 className="text-center font-bold tracking-wider text-[26px] pb-4">What makes BEST FRIENDS different?</h2>
            <h4 className="text-center text-base">Best friends hosts several adoption events throughout the year. You can attend those adoption events, or schedule a meeting with us to meet your new best friends!
                
            </h4>

            <div className="flex mt-16 justify-between items-center mb-16">
                <div className="flex mt-16 justify-between items-center mb-16">
                    <Storie title='Our loving community' text='Best Friends hosts several adoption events throughout the year. You can attend those events to meet your new best friend. Thousands of happy pets and their owners have met through Best Friends.' textButton="READ OUR STORIES" />
                

                    <div className="basis-[45%]">
                        <img src={im1} alt="im1" onMouseEnter={(e)=>{
                        e.currentTarget.style.transform = 'scale(1.1)'
                      }}
                        onMouseLeave={(e)=>{
                        e.currentTarget.style.transform = 'scale(1)'
                        }} />
                    </div>
                </div>
            </div>

            <div className="flex mt-16 justify-between items-center mb-16">

                <div className="basis-[45%]">
                    <img src={im2} alt="im2" onMouseEnter={(e)=>{
                        e.currentTarget.style.transform = 'scale(1.1)'
                    }} onMouseLeave={(e)=>{
                        e.currentTarget.style.transform = 'scale(1)'
                    }}/>
                </div>

                <div className="flex flex-col basis-[45%] gap-4">
                    <div className="flex mt-16 justify-between items-center mb-16">
                        <Storie title='Our loving community' text='Best Friends hosts several adoption events throughout the year. You can attend those events to meet your new best friend. Thousands of happy pets and their owners have met through Best Friends.' textButton="READ OUR STORIES" />
                        <h2 className="color-darkTitle text-normalTitle font-semibold">A supportive network</h2>
                        <p className="text-base color-darkTitle">Best Friends has a special buddy program. You can reach out and talk to Buddies who adopted from our shelter before to learn more about their experiences or ask any questions you might have.</p>
                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">TALK TO A BUDDY</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute" style={
            {
                bottom: '-22%',
                right: '0%',
                transform: 'scale(.7)'
            }
        }>
            <img src={paw3} alt="paw3" />
       </div> */


    );
}

export default Stories;
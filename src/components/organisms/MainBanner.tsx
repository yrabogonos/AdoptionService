import React, {FC} from "react";
import bannerDog from '../../assets/img/dog image.png';
import vector from '../../assets/img/Vector.png';
import Navbar from "../molecules/Navbar";
import BannerButton from "../atoms/BannerButton";


function MainBanner<FC>(){

    return(
        <div className="relative">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 pl-base pr-base mb-24 z-[1]  overflow-hidden" style={{
                borderBottomLeftRadius: '50% 30px',
                borderBottomRightRadius: '50% 100px',
            }}>
                <Navbar/>
                <div className="flex justify-around mt-12">
                    <div className="flex flex-col basis-3/6">
                        <h2 className="text-bannerTitle text-white">Save Your Next</h2>
                        <h2 className="text-bannerTitle text-white font-bold leading-[70px]">Best Friend</h2>
                        <p className="text-base text-white mt-4">Here at LA’s Best Friends Shelter, we aim to bring about a world where there are no more homeless pets. We are dedicated to ending the killing of dogs and cats in America’s shelters.</p>
                        <div className="flex gap-4 mt-8">
                            <BannerButton text="Adopt" isReverse={true}/>
                            <BannerButton text="Donate" isReverse={false}/>
                        </div>
                    </div>

                    <div>
                        <img src={bannerDog} alt="Dog" />
                    </div>

                </div>
            </div>
           
            <div className="absolute" style={
                {
                    bottom: '-2%',
                    zIndex: '-1'
                }
            }>
                <img className="w-full" src={vector} alt="" />
            </div>
        </div>
    );
}

export default MainBanner;
    
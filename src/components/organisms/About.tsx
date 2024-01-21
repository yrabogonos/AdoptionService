import React, {FC} from "react";
import paw from '../../assets/img/paw.png';
import history from '../../assets/img/history.png';
import impact from '../../assets/img/impact.png';
import values from '../../assets/img/values.png';
import AboutCol from "../molecules/AboutCol";


function AboutSection<FC>(){

    return(
        <div className="mb-16 relative pl-base pr-base">
            <div className="flex flex-col">
                <div className="flex flex-col mb-24">
                    <h2 className="text-center font-medium">Who Are We?</h2>
                    <p className="text-center">Best Friends Animal Society in Los Angeles is a donor-supported, nonprofit organization that provides animal care and services for homeless and unowned animals. We work collaboratively with animal rescue groups, city shelters and passionate individuals who are all dedicated to the mission of making Los Angeles a no-kill city by the year 2025.</p>
                </div>
                <div className="flex gap-24">
                   <AboutCol imageSrc={history} title="OUR HISTORY" text="Founded in 1984, Best Friends is a pioneer in the no-kill movement." />
                   <AboutCol imageSrc={impact} title="OUR IMPACT" text="Since 2016, we have reduced needless pet euthanasia by 58% and saved 2.3 thousand additional lives." />
                   <AboutCol imageSrc={values} title="OUR VALUES" text="We are dedicated to making Los Angeles a no-kill city for cats and dogs." />

                </div>
            </div>

            <div className="absolute" style={
                {
                    bottom: '80%',
                    zIndex: 10,
                    right: '-50px'
                }
            }>
                <img className="w-3/4 h-3/4" src={paw} alt="paw" />
            </div>
        </div>
    );
}

export default AboutSection;
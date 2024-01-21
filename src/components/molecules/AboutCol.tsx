import React, {FC} from "react";

type AboutColProps = {
    imageSrc: string,
    title: string,
    text: string
}

function AboutCol<FC>({imageSrc, title, text}:AboutColProps){

    return(
        <div className="flex flex-col basis-1/3">
            <div className="mb-8 flex justify-center">
                <img src={imageSrc} alt="history" />
            </div>
            <div className="flex flex-col">
                <h4 className="text-center text-base font-medium mb-4">{title}</h4>
                <p className="text-center text-base">{text}</p>
            </div>
        </div>
    );

}

export default AboutCol;
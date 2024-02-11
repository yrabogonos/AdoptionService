import React, {FC} from "react";
import logotype from '../../assets/icons/logoGolden.png';
import instagramIcon from '../../assets/icons/instagram.png';
import youtubeIcon from '../../assets/icons/youtube.png';
import twitterIcon from '../../assets/icons/twitter.png';
import facebookIcon from '../../assets/icons/facebook.png';

function Footer(){

    return (
        <div className="pl-base pr-base pt-24 pb-6 bg-dark">

            <div className="row-1 flex">

                <div className="flex flex-col items-center basis-1/5">
                    <img className="pb-2 w-1/3 h-1/3" src={logotype} alt="logotype" />
                    <p className="text-textOrange pb-6">SAVE THEM ALL</p>
                    <div className="flex gap-2 items-center"> 
                        <a href="/">
                            <img src={instagramIcon} alt="instagram" />    
                        </a>
                        <a href="/">
                            <img src={facebookIcon} alt="facebook" />    
                        </a>
                        <a href="/">
                            <img src={twitterIcon} alt="twitter" />    
                        </a>
                        <a href="/">
                            <img src={youtubeIcon} alt="youtube" />    
                        </a>
                    </div>
                    <p className="text-textOrange pt-2 text-[12px]">Follow Us</p>

                </div>

                <div className="basis-1/5"></div>

                <div className="basis-1/5 flex flex-col items-center">
                    <div>
                      <h4 className="text-textOrange">LEARN MORE</h4>
                      <ul>
                          <li className="pb-1"><a className='text-white'href="/">Adoption</a></li>
                          <li className="pb-1"><a className='text-white'href="/">Donation</a></li>
                          <li><a className='text-white'href="/">Volunteers</a></li>
                     
                      </ul>
                    </div>
                </div>

                <div className="basis-1/5 flex flex-col items-center">
                    <div>
                      <h4 className="text-textOrange">NO KILL PROGRAMS</h4>
                      <ul>
                          <li className="pb-1"><a className='text-white'href="/">NKLA Los Angeles</a></li>
                          <li className="pb-1"><a className='text-white'href="/">NKUT Utah</a></li>
                      </ul>
                    </div>
                </div>

                <div className="basis-1/5 flex flex-col items-center">
                   <div>
                    <h4 className="text-textOrange">QUICK LINKS</h4>
                    <ul>
                        <li className="pb-1"><a className='text-white'href="/">Resources</a></li>
                        <li className="pb-1"><a className='text-white'href="/">Newsletter Archive</a></li>
                        <li><a className='text-white'href="/">Careers</a></li>
                   
                    </ul>
                   </div>
                </div>
              


            </div>
            
            <div className="row-2 flex mt-12 justify-between">

                <p className="text-white">© 2020 Best Friends </p>
                <div className="flex gap-2 text-white">
                    <a href="/">Policies ｜</a>
                    <a href="/">Site map ｜</a>
                    <a href="/">Accessibility Features |</a>
                    <a href="/">Privacy Notice</a>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;

import React from "react";
import "./Best.css"
import {FaCheck} from "react-icons/fa";
import {BsFillPlayFill} from "react-icons/bs";
import bestImage from '../../assets/2.png'


const Best = () => {
    return(
         <>
          <section className="intro-best">
            <div className="container">
                <div className="row">
                       <div className="col-md-5">
                       <h3>We make everything by hand with the best possible ingredients.</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                       <ul className="List">
                        <li> <FaCheck className="check"/> Etiam sed dolor ac diam volutpat.</li>
                        <li> <FaCheck className="check"/> Erat volutpat aliquet imperdiet.</li>
                        <li> <FaCheck className="check"/> Erat volutpat aliquet imperdiet.</li>
                       </ul>
                       <div class="space30"></div>
                       <a href="#" class="btn btn-lg btn-primary">Learn More <i class="icon-arrow-right"></i></a>
                       </div>
                       <div className="col-md-7">
                        <img src={bestImage} title="bestImage" alt="" />
                       </div>
                </div>
                <div className="space100"></div>
             </div>
          </section>
          <section>
          <div className="more-best">
                    <div className="row text-center">
                    <h1>When a man's stomach is full it makes no <br /> difference whether he is rich or poor.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <div className="space40"></div>
                    <div className="Best-video">
                        <span><BsFillPlayFill className="BsFillPlayFill"/> Watch Our Story</span>
                    </div>
                    </div>
                </div>
          </section>
         </>
    )

}


export default Best;
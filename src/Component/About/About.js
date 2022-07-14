import React from "react";
import "./About.css"
import aboutImage from "../../assets/1.png";


const About = ()=> {
    return(
       <>
            <section id="About" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <img  src={aboutImage} title="aboutImage" alt="" />
                        </div>
                        <div className="col-md-5">
                            <h3>We pride ourselves on making real food from the best ingredients.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button><a href="/#"></a>Learn More</button>
                        </div>
                    </div>

                </div>

            </section>       
       </>
             
        

    )


    
}


export default About;
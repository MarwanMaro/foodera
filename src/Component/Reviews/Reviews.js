import React from "react";
import "./Reviews.css";
import ImageSlider from "../Images/ImageSlider";

const Review =()=> {
        
    

    return(
        <>
           <div id="review" className="review-color">
            <div className="container">
                <div className="testimonials  text-center">
                    <h2>Testimonials</h2>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <ImageSlider />
                    </div>         
                </div>
                <div class="space100"></div>
            </div>
            
           </div>
        </>
    )
}



export default Review;
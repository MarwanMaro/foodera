import React from "react";
import "./Header.css";
import {FaShoppingBasket} from "react-icons/fa";


const Header = ()=>{
    return(
         <header>
            <div id="Header" className="container">
               <div className="row">
               <div className="col-md-6">
                     <h2>good food choices are good investments.</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                     <button className="B-left">Order Now <FaShoppingBasket  className="FaShoppingBasket"/></button>
                     <button className="B-right">Learn more</button>
                </div>
                {/* <div className="col-md-6">
                    
                </div> */}
               </div>
            </div>
         </header>
    )

}

export default Header;
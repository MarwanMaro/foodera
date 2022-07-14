import React from "react";
import "./Explore.css"
import  cardImage from "../../assets/01.jpg"
import  cardImage2 from "../../assets/02.jpg"
import  cardImage3 from "../../assets/03.jpg"



const Explore = () =>{
    return(
        <>
          <div id="Explore" className="Explore-element">
            <div className="container">
                <div className="Explore-content text-center">
                    <h2>Explore Our Foods </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in Bookmarksgrove.</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card-product">
                            <div className="img-wrap">
                                <img src={cardImage} alt="" />
                            </div>
                            <div className="info">
                                <h3 className="title">Rainbow Vegetable Sandwich</h3>
                                <p className="desc"> Time: 15 - 20 Minutes | Serves: 1 </p>
                            </div>
                            <div className="price">
                                <span className="price-new">EGP70.90</span>
                                <del className="price-old">EGP89.50</del>
                            </div>
                            <div className="bottom-order">
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-product">
                            <div className="img-wrap">
                                <img src={cardImage2} alt="" />
                            </div>
                            <div className="info">
                                <h3 className="title">Vegetarian Burger</h3>
                                <p className="desc"> Time: 15 - 20 Minutes | Serves: 1 </p>
                            </div>
                            <div className="price">
                                <span className="price-new">EGP35.40</span>
                                <del className="price-old">EGP43.70</del>
                            </div>
                            <div className="bottom-order">
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card-product">
                            <div className="img-wrap">
                                <img src={cardImage3} alt="" />
                            </div>
                            <div className="info">
                                <h3 className="title">Raspberry Stuffed French Toast</h3>
                                <p className="desc"> Time: 15 - 20 Minutes | Serves: 1 </p>
                            </div>
                            <div className="price ">
                                <span className="price-new">EGP50.50</span>
                                <del className="price-old">EGP60.70</del>
                            </div>
                            <div className="bottom-order">
                                <button>Order Now</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
          </div>
          <div className="space110"></div>
        </>

    )
}


export default Explore;
import React from "react";
import Header from "./Header";
import './Home.css'
import CountUp from 'react-countup';

function Home() {
    return (
        <>
           <Header />
           <section id="Home" className="numbers">
            <div className="container">
                <div className="row">
                     <div className="col-md-3">
                        <h2><CountUp end={5688} />+</h2>
                        <h6>SAVINGS</h6>
                     </div>
                     <div className="col-md-3">
                        <h2><CountUp end={5786}/>+</h2>
                        <h6>PHOTOS</h6>
                     </div>
                     <div className="col-md-3">
                        <h2><CountUp end={1440}/>+</h2>
                        <h6>ROCKETS</h6>
                     </div>
                     <div className="col-md-3">
                        <h2><CountUp end={7110}/>+</h2>
                        <h6>GLOBES</h6>
                     </div>
                </div>
            </div>

           </section>
        </>
    );
}


export default Home;
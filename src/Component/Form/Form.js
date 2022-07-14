import React, { useState } from 'react'
import "./Form.css"

const Form = () => {
    const [email , setEmail] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log("email", email);
    }

  return (
    <>
    <div className='forms text-center'>
        <div className='Offer'>
            <div className='container'>
                <div className='col-md-12'>
                    <h1>Hurry up! Subscribe our newsletter 
                        <br />
                        and get
                        <span> 25% Off</span>
                    </h1>
                    <p>Limited time offer for this month. No credit card required.</p>
                    <form onSubmit={handleSubmit} className='intro-newsletter'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <input className='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address here" />
                            </div>
                            <div className='col-md-4'>
                            <button className='ptn' type='submit'>Subscribe</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
    <div class="space80"></div>
    </>
  )
}

export default Form
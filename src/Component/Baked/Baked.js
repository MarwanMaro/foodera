import React from 'react'
import  "./Baked.css"

const Baked = () => {
  return (
    <>
      <section className='backed text-center'>
      <div class="overlay"></div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-8  Content'>
             <h4>Baked fresh daily by bakers with passion.</h4>
            </div>
            
                <div className='col-md-4'>
                <button className='btn-backed'>Learn More</button>
                
            </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Baked;
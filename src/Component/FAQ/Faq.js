import React from 'react'



import "./FAQ.css"
const Faq = () => {
  return (
    <> 
      <div id='FAQ' className='FAQ'>
        <div className='container'>
            <div className='FAQ-content text-center'>
                <h2>Frequently Asked Questions</h2>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='faq-info'>
                        <h3>
                        <span>~</span>
                        Is Foodera Bread really baked fresh each day?
                        </h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='faq-info'>
                        <h3>
                        <span>~</span>
                        Do you bake breads containing animal fats or products?
                        </h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='faq-info'>
                        <h3>
                        <span>~</span>
                        Can I order your products online?
                        </h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='faq-info'>
                        <h3>
                        <span>~</span>
                        When are you opening a shop near me?
                        </h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
            </div>
            <div class="space100"></div>
        </div>
      </div>
    </>
  )
}

export default Faq
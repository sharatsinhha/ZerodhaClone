import React from 'react';
function Hero() {
    return (
        <div className='container p-5 text-center'>
            <div className='row'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p className='mb-4'>Online platform to invest in stocks, derivaties, mutual funds, and more</p>
                <button type="button" className="btn btn-primary p-2 mb-5" style={{width: "15%", margin: "auto"}}>Signup now</button>
            </div>
        </div>
     );
}

export default Hero;
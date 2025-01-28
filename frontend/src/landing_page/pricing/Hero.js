import React from 'react';
function Hero() {
    return ( 
        <div className='container p-4'>
            <div className='row text-center mt-5 border-bottom'>
                <h1>Pricing</h1>
                <h3 className='text-muted mb-5 fs-5 mt-4'>Free equity investments and flat ₹20 traday and F&O trades</h3>
            </div>
            <div className='row text-center p-4'>
                <div className='col p-4'>
                    <img src='media/images/pricingEquity.svg'/>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free - ₹0 brokerage.</p>
                </div>
                <div className='col p-4'>
                    <img src='media/images/intradayTrades.svg'/>
                    <h1 className='fs-3'>Intraday and F&O trade</h1>
                    <p className='text-muted'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className='col p-4'>
                <img src='media/images/pricingEquity.svg'/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual funds are absolutely free - ₹0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;
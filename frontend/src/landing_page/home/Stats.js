import React from 'react';
function Stats() {
    return ( 
        <div className='container p-4 mb-5'>
            <div className='row p-4'>
                <div className='col-6 p-4'>
                    <h2 className='mb-5 fs-3'>Trust with confidence</h2>

                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of ewuity investments.</p>

                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gimification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate tansactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-4 mt-3'>
                    <img src='media/images/ecosystem.png' alt='ecosystem' style={{width: "90%"}}/>
                    <div className='text-center'>
                        <a href='' style={{textDecoration: "none"}} className='m-3'>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration: "none"}}>Try Kite</a>
                    </div>
                </div>
            </div>
        </div>
        
     );
}

export default Stats;
import React from 'react';
function Hero() {
    return ( 
        <div className='container border-bottom'>    
            <div className='row text-center mt-5 p-3 mb-5'>
                <h1 className='mb-3'>Technology</h1>
                <h3 className='text-muted mb-3 fs-5'>Sleek, modern and intuitive trading platforms</h3>
                <p>Check out our <a style={{textDecoration: 'none'}} href=''>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;
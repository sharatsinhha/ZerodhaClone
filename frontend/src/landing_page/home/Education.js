import React from 'react';
function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/education.svg' alt='education image' style={{width: "85%"}}/>
                </div>
                <div className='col p-5'>
                    <h2 className='mb-5'>Free and open market educaiton</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration: "none"}}>Varsity <i class="fa fa-long-arrow-right mt-1" aria-hidden="true"></i></a>
                    <p className='mt-5'>Trading Q&A, the most active trading and investment communities in India for all your market related queries.</p>
                    <a href='' style={{textDecoration: "none"}}>Varsity <i class="fa fa-long-arrow-right m-1" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;
import React from 'react';
function RightSection({
    productName, productDescription, learnMore, imageURL
}) {
    return ( 
        <div className='container p-5'> 
            <div className='row mt-5'>
                <div className='col p-5 mt-4'>
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration: 'none'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col p-4'>
                    <img src={imageURL} style={{width:'90%'}}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;
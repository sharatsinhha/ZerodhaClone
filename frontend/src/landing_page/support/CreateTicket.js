import React from 'react';
function CreateTicket() {
    return ( 
        <div className='container'> 
            <div className='row p-5 pb-0'>
                <h2>To crate a ticket, select a relevant topic</h2>
                <div className='col-4 mt-5 p-4'>
                    <h5 className='mb-4'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h5>
                    <a href='' style={{textDecoration: 'none'}}><p>Online Account Opening</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Offline Account Opening</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Company, Partnership and Account Opening</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>NRI Account Opening</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Graphs at Zerodha</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Zerodha IDFC First Bank 3-in-1 Account</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Getting Started</p></a>
                </div>
                <div className='col-4 mt-5 p-4'>
                    <h5 className='mb-4'><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</h5>
                    <a href='' style={{textDecoration: 'none'}}><p>Login Credentials</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Account Modification and Segment Addition</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>DP ID and bank details</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Your Profile</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Transfer and conversion of shares</p></a>
                </div>
                <div className='col-4 mt-5 p-4'>
                    <h5 className='mb-4'><i class="fa fa-bar-chart" aria-hidden="true"></i> Account Opening</h5>
                    <a href='' style={{textDecoration: 'none'}}><p>Margin/leverage, Product and Order</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Kite Web Mobile</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Trading FAQs</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Corporate Actions</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Sentinel</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Kite API</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Pi and other platforms</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Stockreports+</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>GTT</p></a>
                </div>
            </div>
            <div className='row p-5 pt-0'>
                <div className='col-4 p-4'>
                    <h5 className='mb-4'><i class="fa fa-plus-circle" aria-hidden="true"></i> Funds</h5>
                    <a href='' style={{textDecoration: 'none'}}><p>Adding Funds</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Fund Withdrawal</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Adding bank accounts</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>eMandates</p></a>
                </div>
                <div className='col-4 p-4'>
                    <h5 className='mb-4'><i class="fa fa-circle-o-notch" aria-hidden="true"></i> Console</h5>
                    <a href='' style={{textDecoration: 'none'}}><p>Reports</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Referral program</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>DP ID and bank details</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Your Profile</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Transfer and conversion of shares</p></a>
                </div>
                <div className='col-4 p-4'>
                    <h5 className='mb-4'><i class="fa fa-circle-thin" aria-hidden="true"></i> Coin</h5>
                    <a href='' style={{textDecoration: 'none'}}><p>Understanding mutual funds</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>About Coin</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>Transaction and reports</p></a>
                    <a href='' style={{textDecoration: 'none'}}><p>National Pension Scheme (NPS)</p></a>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;
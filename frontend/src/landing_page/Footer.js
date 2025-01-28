import React from "react";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240, 240, 240)" }}>
      <div className="container p-5 pb-0 border-top mt-5">
        <div className="row">
          <div className="col">
            <a class="navbar-brand" href="#">
              <img
                src="media/images/logo.svg"
                alt="logo"
                style={{ width: "50%" }}
              />
            </a>
            <p style={{ fontSize: "13px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            <a href="" className="text-muted"><i class="fa fa-twitter" style={{marginRight:'10px'}} aria-hidden="true"></i></a>
            <a href="" className="text-muted"><i class="fa fa-facebook-official" style={{marginRight:'10px'}}  aria-hidden="true"></i></a>
            <a href="" className="text-muted"><i class="fa fa-instagram" style={{marginRight:'10px'}}  aria-hidden="true"></i></a>
            <a href="" className="text-muted"><i class="fa fa-linkedin" style={{marginRight:'10px'}}  aria-hidden="true"></i></a>
            <a href="" className="text-muted"><i class="fa fa-telegram" style={{marginRight:'10px'}}  aria-hidden="true"></i></a>
          </div>
          <div className="col" style={{lineHeight: '2'}}>
            <p>Company</p>
            <a className='text-muted text-decoration-none' href="#">About</a> <br />
            <a className='text-muted text-decoration-none' href="#">Products</a> <br />
            <a className='text-muted text-decoration-none' href="#">Pricing</a> <br />
            <a className='text-muted text-decoration-none' href="#">Referral Program</a> <br />
            <a className='text-muted text-decoration-none' href="#">Careers</a> <br />
            <a className='text-muted text-decoration-none' href="#">Zerodha.tech</a> <br />
            <a className='text-muted text-decoration-none' href="#">Press & Media</a> <br />
            <a className='text-muted text-decoration-none' href="#">Zerodha Cares</a> <br />
          </div>
          <div className="col" style={{lineHeight: '2'}}>
            <p>Support</p>
            <a className='text-muted text-decoration-none' href="#">Contact</a> <br />
            <a className='text-muted text-decoration-none' href="#">Support Portal</a> <br />
            <a className='text-muted text-decoration-none' href="#">Z-Connect Blog</a> <br />
            <a className='text-muted text-decoration-none' href="#">List of charges</a> <br />
            <a className='text-muted text-decoration-none' href="#">Downloads & Resources</a> <br />
          </div>
          <div className="col" style={{lineHeight: '2'}}>
            <p>Account</p>
            <a className='text-muted text-decoration-none' href="#">Open an account</a> <br />
            <a className='text-muted text-decoration-none' href="#">Fund transfer</a> <br />
            <a className='text-muted text-decoration-none' href="#">60 day challenge</a> <br />
          </div>
        </div>
        <div className="mt-5" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE - SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. - SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 - SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div>
          <p className='text-center'>
            <a style={{textDecoration:'none', marginRight:'20px', color:'rgb(58, 58, 58)'}} href="">NSE</a>
            <a style={{textDecoration:'none', marginRight:'20px', color:'rgb(58, 58, 58)'}} href="">BSE</a>
            <a style={{textDecoration:'none', marginRight:'20px', color:'rgb(58, 58, 58)'}} href="">MCX</a>
            <a style={{textDecoration:'none', marginRight:'20px', color:'rgb(58, 58, 58)'}} href="">Terms & Conditions</a>
            <a style={{textDecoration:'none', marginRight:'20px', color:'rgb(58, 58, 58)'}} href="">Policies & Procedures</a>
            <a style={{textDecoration:'none', marginRight:'20px', color:'rgb(58, 58, 58)'}} href="">Privacy Policies</a>
            <a style={{textDecoration:'none', marginRight:'20px', color:'rgb(58, 58, 58)'}} href="">Discloser</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

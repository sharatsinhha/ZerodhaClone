import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2 className="mb-4">The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png"/>
          <p className="text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width: '150px'}}/>
          <p className="text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg"style={{width: '150px'}} />
          <p className="text-muted">Option trading platform</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/zerodhaFundhouse.png" style={{width: '200px'}}/>
          <p className="text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/goldenpiLogo.png" style={{width: '150px'}}/>
          <p className="text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/dittoLogo.png" style={{width: '150px'}}/>
          <p className="text-muted">insurance  platform</p>
        </div>
        <button type="button" className="btn btn-primary p-2 mb-5 mt-4" style={{width: "15%", margin: "auto"}}>Signup now</button>
      </div>
    </div>
  );
}

export default Universe;

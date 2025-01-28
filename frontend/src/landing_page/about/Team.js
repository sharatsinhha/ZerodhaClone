import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5 border-top">
        <h1 className="text-center">
            People
        </h1>
      </div>
      <div
        className="row p-4 text-muted"
        style={{ lineHeight: "2" }}
      >
        <div className="col p-5 text-center">
          <img src='media/images/nithinKamath.jpg' alt="Nithin Kamath" style={{width: "55%", borderRadius:"100%", marginBottom:"30px"}} />
          <h5>
            Nithin Kamath
          </h5>
          <h6>
            Founder, CEO
          </h6>
        </div>
        <div className="col p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on <a href='' style={{textDecoration:'none'}}>Homepage</a> / <a href='' style={{textDecoration:'none'}}>TradingQnA</a> / <a href='' style={{textDecoration:'none'}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

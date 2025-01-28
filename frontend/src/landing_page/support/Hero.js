import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id='supportWrapper'>
            <h4 className="fs-5">Support Portal</h4>
            <a href="">Track Tickets</a>
        </div>
        <div className="row" style={{marginLeft: '150px'}}>
          <div className="col-6 p-5 pt-0">
            <h3>Search for an answer or browse help topics to create a ticket</h3>
            <input className='mb-3 mt-3'placeholder="Eg: how do I activate F&O, why is my order getting rejected.."/><br/>
            <a href="" >Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday</a><br/>
            <a href="">margins</a>
            <a href="">Kite user manual</a>
          </div>
          <div className="col-6 p-5  pt-0">
            <h4>Featured</h4>
            <ol>
                <li><a href=''>Curent Takeovers and Delisting - January 2024</a></li>
                <li><a href=''>Latest Intraday leverages - MIS & CO</a></li>
            </ol>
          </div>
        </div>
    </section>
  );
}

export default Hero;

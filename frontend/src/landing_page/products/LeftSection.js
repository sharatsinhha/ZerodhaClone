import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-5 mt-4">
          <img src={imageURL} style={{ width: "90%" }} />
        </div>
        <div className="col p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "20px", textDecoration:'none'}}>
              Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className='mt-4'>
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="google play store"
              />
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="media/images/appstoreBadge.svg" alt="app store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

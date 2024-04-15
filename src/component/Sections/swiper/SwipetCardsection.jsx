import React from "react";

function SwipetCardsection({ alt, img }) {
  return (
    <>
      <div className="row">
        <div className="col col-md-12 col-sm-12 col-lg-12 col-xl-12">
          <div className="card rounded-5 swiper-card">
            <img
              alt={alt}
              src={img}
              height="100%"
              width="100%"
              className="rounded-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SwipetCardsection;

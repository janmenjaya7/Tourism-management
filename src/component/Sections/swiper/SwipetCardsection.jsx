<<<<<<< HEAD
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
=======
import React from "react";

function SwipetCardsection({ alt, img }) {
  return (
    <div>
      <div className=" container">
        <div className="row">
          <div className="col col-md-12 col-sm-12 col-lg-12 col-xl-12">
            <div className="card rounded-4 swiper-card">
              <img
                alt={alt}
                src={img}
                height="70%"
                width="100%"
                className="rounded-top-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwipetCardsection;
>>>>>>> 7a7e236b96e4826b37126ea089515647f5ba6407

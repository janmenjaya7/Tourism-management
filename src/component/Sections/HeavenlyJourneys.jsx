import React from "react";
import { Data } from "../data";
import { Heart } from "react-bootstrap-icons";
function PriceDetels() {
  return (
    <div className="heavenly-journeys p-3">
      <div className=" text-center p-5">
        <h1>Heavenly Journeys</h1>
        <p>Experience Blissful Travels with Tour Crown's Heavenly Packages.</p>
      </div>
      <div className="row">
        {Data.map((e) => {
          return (
            <div
              key={e.id}
              className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 p-2"
            >
              <li>
                <div
                  className="card  text-white"
                  style={{ height: "26rem", overflow: "hidden" }}
                >
                  <img
                    src={e.image}
                    className="card-img"
                    style={{ height: "250px" }}
                    alt={e.title}
                  />
                  <div className="p-3">
                    <p className="pb-2">
                      Some quick example text to build on the card title and
                      make
                    </p>
                    <p className="pb-2">{e.place}</p>
                    <div className="d-flex flex-row justify-content-between">
                      <button to="#" className="btn btn-primary  opacity-80">
                        Request book
                      </button>
                      <button className="btn btn-warning  opacity-70">
                        <Heart color="red" size="20" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PriceDetels;

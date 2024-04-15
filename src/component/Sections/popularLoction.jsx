<<<<<<< HEAD
import React from "react";
import { Data } from "../data";
function PopularLoction() {
  return (
    <>
      <div className="Popular-location bg-light  p-3">
        <div className="text-center p-3">
          <h1>Popular Location To Explore</h1>
          <p>
            Explore Hidden Paradises with Tour Crown - Your Passport to
            Unforgettable Adventures.
          </p>
        </div>
        <div className="d-flex flex-wrap">
          {Data.map((e) => {
            return (
              <li key={e.id} className="popular-location-list-item">
                <div
                  class="card bg-dark text-white m-2 border-0 "
                  style={{ height: "20rem", overflow: "hidden" }}
                >
                  <img
                    src={e.image}
                    class="card-img "
                    style={{ opacity: 0.5, height: "100%" }}
                    alt={e.title}
                  />
                  <div class="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center">
                    <h3>{e.place}</h3>
                    <span>{e.title}</span>
                    <p className=" text-white">Last updated 3 mins ago...</p>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PopularLoction;
=======
import React from "react";
import { Data } from "../data";
function PopularLoction() {
  return (
    <div className="bg-light p-5">
      <div className="container ">
        <div className="text-center">
          <h1>Popular Location To Explore</h1>
          <p>
            Explore Hidden Paradises with Tour Crown - Your Passport to
            Unforgettable Adventures.
          </p>
        </div>
        <div className="d-flex flex-wrap">
          {Data.map((e) => {
            return (
              <li key={e.id} className="popular-location-list-item">
                <div
                  class="card bg-dark text-white m-2 border-0 "
                  style={{ height: "20rem", overflow: "hidden" }}
                >
                  <img
                    src={e.image}
                    class="card-img "
                    style={{ opacity: 0.5, height: "100%" }}
                    alt={e.title}
                  />
                  <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                    <h3>{e.place}</h3>
                    <span>{e.title}</span>
                    <h6>Last updated 3 mins ago</h6>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularLoction;
>>>>>>> 7a7e236b96e4826b37126ea089515647f5ba6407

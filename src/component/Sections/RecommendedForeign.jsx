import React from "react";
import { Data } from "../data";
function RecommendedForeign() {
  return (
    <div className="Recommended-Foreign p-3">
      <div className="text-center  Foreign-trips p-5">
        <h1>Recommended Foreign Trips</h1>
        <h5>
          Tour Crown's Top Picks: Most Recommended International Tours for Your
          Ultimate Adventure!
        </h5>
      </div>
      <div className="d-flex flex-wrap gap-3">
        {Data.map((ele) => {
          return (
            <li key={ele.id} className="Foreign-Trips-list">
              <div
                className="card rounded-pill card-pill "
                style={{ height: "19rem", overflow: "hidden" }}
              >
                <img
                  src={ele.image}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "70%" }}
                />
                <div className="card-body">
                  <p className="card-text text-center text-uppercase">
                    {ele.place}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </div>
      <div className="d-flex justify-content-center align-items-center m-5">
        <button className="btn btn-info p-3 w-50 fs-4">Explore More</button>
      </div>
    </div>
  );
}

export default RecommendedForeign;

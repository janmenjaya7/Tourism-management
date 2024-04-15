import React, { useEffect } from "react";
import "./SlicsSection.css";

function SlicsSection() {
  useEffect(() => {
    $(".center").slick({
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });
  }, []);

  return (
    <div className="center">
      <div>lkgadslfldsl</div>
      <div>lkgadslfldsl</div>
      <div>lkgadslfldsl</div>
      <div>lkgadslfldsl</div>
      <div>lkgadslfldsl</div>
    </div>
  );
}

export default SlicsSection;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

export default function CarouselComponent(props) {
  const { images } = props;
  return (
    <div className="max-w-xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false} // Hide navigation arrows
        showStatus={false} // Hide status indicator
        showThumbs={false} // Hide thumbnail images
      >
        {images.map((img, index) => (
          <div>
            <img src="image3.jpg" alt="Image 3" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

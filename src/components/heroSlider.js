import React from "react";
import HeroCarousel from "react-hero-carousel";
import "./hero.css";

const heroSlider = () => (
  <section className="mt-5">
    <HeroCarousel class="hero" height="100vh" interval={4000}>
      <img
        className="image-bg"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "0% 0%",
        }}
        src="http://xdesktopwallpapers.com/wp-content/uploads/2011/04/Girls-After-Shopping.jpg"
        width="100%"
        height="100%"
        alt=""
      />
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "0% 100%"
        }}
        src="https://m.media-amazon.com/images/S/aplus-media/vc/b60bd1e7-6c22-427f-8846-be49cdf942e5.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
        width="100%"
        height="100%"
        alt=""
      />
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "0% 0%",
        }}
        src="https://m.media-amazon.com/images/S/aplus-media/vc/b4bdb05b-c086-41b1-9951-5905eb4bd561.__CR0,0,3050,1250_PT0_SX1464_V1___.jpg"
        width="100%"
        height="100%"
        alt=""
      />
    </HeroCarousel>
  </section>
);

export default heroSlider;

import React, { useState } from "react";
import Section from "./Section";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "../styles/Gallery.module.css";

import ImgErlangshen from "../assets/images/Erlangshen.jpeg";
import ImgFreedom from "../assets/images/Freedom.jpeg";
import ImgGirl from "../assets/images/Girl-in-traditional-accessories.jpeg";
import ImgSun from "../assets/images/Given-the-sun.jpeg";
import ImgDust from "../assets/images/Into-dust.jpeg";
import ImgKunlun from "../assets/images/Kunlun.jpeg";
import ImgArrow from "../assets/images/Man-with-bow-and-arrow.jpeg";
import ImgMikkelsen from "../assets/images/Mikkelsen.jpeg";
import ImgGlasses from "../assets/images/Portrait-man-with-glasses.jpeg";
import ImgPortrait from "../assets/images/Portrait.jpeg";
import ImgPracticeAYG from "../assets/images/Practice.jpeg";
import ImgRomeo from "../assets/images/Romeo-practice.jpeg";
import ImgPope from "../assets/images/The-pope.jpeg";
import ImgThranduil from "../assets/images/Thranduil.jpeg";

export const images = [
  {
    src: ImgErlangshen,
    caption: "Artwork 2",
    width: ImgErlangshen.width,
    height: ImgErlangshen.height,
  },
  {
    src: ImgFreedom,
    caption: "Artwork 2",
    width: ImgFreedom.width,
    height: ImgFreedom.height,
  },
  {
    src: ImgGirl,
    caption: "Artwork 2",
    width: ImgGirl.width,
    height: ImgGirl.height,
  },
  {
    src: ImgSun,
    caption: "Artwork 2",
    width: ImgSun.width,
    height: ImgSun.height,
  },
  {
    src: ImgDust,
    caption: "Artwork 2",
    width: ImgDust.width,
    height: ImgDust.height,
  },
  {
    src: ImgKunlun,
    caption: "Artwork 2",
    width: ImgKunlun.width,
    height: ImgKunlun.height,
  },
  {
    src: ImgArrow,
    caption: "Artwork 2",
    width: ImgArrow.width,
    height: ImgArrow.height,
  },
  {
    src: ImgMikkelsen,
    caption: "Artwork 2",
    width: ImgMikkelsen.width,
    height: ImgMikkelsen.height,
  },
  {
    src: ImgGlasses,
    caption: "Artwork 2",
    width: ImgGlasses.width,
    height: ImgGlasses.height,
  },
  {
    src: ImgPortrait,
    caption: "Artwork 2",
    width: ImgPortrait.width,
    height: ImgPortrait.height,
  },
  {
    src: ImgPracticeAYG,
    caption: "Artwork 2",
    width: ImgPracticeAYG.width,
    height: ImgPracticeAYG.height,
  },
  {
    src: ImgRomeo,
    caption: "Artwork 2",
    width: ImgRomeo.width,
    height: ImgRomeo.height,
  },
  {
    src: ImgPope,
    caption: "Artwork 2",
    width: ImgPope.width,
    height: ImgPope.height,
  },
  {
    src: ImgThranduil,
    caption: "Artwork 2",
    width: ImgThranduil.width,
    height: ImgThranduil.height,
  },
];

const ArtGallery = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  return (
    <Section padding={300}>
      <div className="gallery">
        <Gallery
          width="60%"
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
          rowHeight={360}
          layout="masonry"
          enableLightbox={true}
        />
      </div>
      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        animation={{ fade: 330, swipe: 250 }}
        carousel={{
          finite: false,
          preload: 1,
          padding: "16px",
          spacing: "30%",
          imageFit: "contain",
        }}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 1,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 500,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 150,
          pinchZoomDistanceFactor: 150,
          scrollToZoom: false,
        }}
      />
    </Section>
  );
};

export default ArtGallery;

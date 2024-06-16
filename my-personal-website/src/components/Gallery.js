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
    width: 665,
    height: 1182,
  },
  {
    src: ImgGirl,
    width: 1129,
    height: 695,
  },
  {
    src: ImgThranduil,
    width: 686,
    height: 1144,
  },
  {
    src: ImgRomeo,
    width: 724,
    height: 1086,
  },
  {
    src: ImgSun,
    width: 1182,
    height: 665,
  },
  {
    src: ImgDust,
    width: 1180,
    height: 665,
  },
  {
    src: ImgKunlun,
    width: 1182,
    height: 665,
  },
  {
    src: ImgMikkelsen,
    width: 706,
    height: 1112,
  },
  {
    src: ImgArrow,
    width: 1182,
    height: 665,
  },
  {
    src: ImgFreedom,
    width: 1182,
    height: 665,
  },
  {
    src: ImgPortrait,
    width: 665,
    height: 1182,
  },
  {
    src: ImgGlasses,
    width: 697,
    height: 1128,
  },
  {
    src: ImgPope,
    width: 1179,
    height: 667,
  },
  {
    src: ImgPracticeAYG,
    width: 724,
    height: 1086,
  },
];

const ArtGallery = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  return (
    <Section>
      <div className="gallery">
        <Gallery
          width="60%"
          images={images}
          rowHeight={420}
          onClick={handleClick}
          enableImageSelection={false}
          layout="mansory"
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

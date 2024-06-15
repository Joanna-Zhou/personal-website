import React, { useState } from "react";
import Section from "./Section";
// import { motion } from "framer-motion";
import { Gallery, Image } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export const images = [
  {
    original: "https://via.placeholder.com/300",
    src: "https://via.placeholder.com/300",
    caption: "Artwork 2",
  },
  {
    original: "https://via.placeholder.com/300",
    src: "https://via.placeholder.com/300",
    caption: "Artwork 1",
  },
  {
    original: "https://via.placeholder.com/300",
    src: "https://via.placeholder.com/300",
    caption: "Artwork 3",
  },
  {
    original: "https://via.placeholder.com/300",
    src: "https://via.placeholder.com/300",
    caption: "Artwork 4",
  },
  {
    original: "https://via.placeholder.com/300",
    src: "https://via.placeholder.com/300",
    caption: "Artwork 5",
  },
  {
    original: "https://via.placeholder.com/300",
    src: "https://via.placeholder.com/300",
    caption: "Artwork 6",
  },
  {
    original: "https://via.placeholder.com/300",
    src: "https://via.placeholder.com/300",
    caption: "Artwork 7",
  },
  {
    original: "https://via.placeholder.com/300",
    src: "https://via.placeholder.com/300",
    caption: "Artwork 8",
  },
  {
    original: "https://via.placeholder.com/300",
    src: "https://via.placeholder.com/300",
    caption: "Artwork 9",
  },
  {
    original: "https://via.placeholder.com/300",
    src: "https://via.placeholder.com/300",
    caption: "Artwork 10",
  },
];

// const slides = images.map(({ original }) => ({
//   src: original,
//   // width,
//   // height,
// }));

const ArtGallery = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  const thumbswithSrc = images.map((image) => {
    return {
      ...image,
      src: `https://raw.githubusercontent.com/Department-of-Decentralization/3-photos/main/thumbnails/${image.name}`,
    };
  });

  const imagesWithSrc = images.map((image) => {
    return {
      src: `https://raw.githubusercontent.com/Department-of-Decentralization/3-photos/main/${image.name}`,
    };
  });

  return (
    // <Section>
    <>
      <div>
        <Gallery
          images={thumbswithSrc}
          onClick={handleClick}
          enableImageSelection={false}
          rowHeight={240}
          margin={4}
        />
      </div>
      <Lightbox
        slides={imagesWithSrc}
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
    </>
    // </Section>
  );
};

export default ArtGallery;

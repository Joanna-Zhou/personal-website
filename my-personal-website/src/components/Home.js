import { React, useState, useEffect } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  font-family: "Playfair", sans-serif;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-left: 2rem;
  text-align: left;
  font-family: "Lato", serif;
`;

const TitleDiv = styled.div`
  left: 20%;
  z-index: 10;
  position: absolute;
`;


const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(50);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software Developer.",
    "Traditional Artist.",
    "Robotics & AI Engineer.",
  ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(50);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Section id="home" title="">
      <HomeWrapper>
        {/* <Image src={headerImg} alt="Header Img" /> */}
        <TrackVisibility>
          {({ isVisible }) => (
            <TitleDiv
              className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <Title
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                {`I'm Jojo`}{" "}
              </Title>
              <Subtitle
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
                <p />
                {"Welcome to my world."}
              </Subtitle>
            </TitleDiv>
          )}
        </TrackVisibility>
      </HomeWrapper>
    </Section>
  );
};

export default Home;

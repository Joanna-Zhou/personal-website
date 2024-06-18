import React, { useEffect } from "react";
import Section from "./Section";
import styled from "styled-components";
import { motion } from "framer-motion";
import TagCloud from "TagCloud";
import "../styles/About.module.css";

const Content = styled(motion.div)`
  color: #bbb;
  text-align: right;
  font-size: 1.4rem;
  margin-right: 45%;
  position: relative;
  z-index: 2; /* Ensures Content is on top */
`;

const TagsDiv = styled.div`
  // background-color: red;
  height: content-fit;
  font-size: 1.4rem;
  top: -20%; /* Adjust to control overlap */
  bottom: 20%;
  left: 56%;
  position: absolute;
  z-index: 1; /* Ensures TagsDiv is below Content */
`;

const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const container = ".tagcloud";

const texts = [
  "Git",
  "Python",
  "C++",
  "C#",
  "Robotics",
  "CI/CD",
  "YAML",
  "CV",
  "NLP",
  "Matlab",
  "React",
  "SLAM",
  "XAML",
];

const options = {
  radius: 300,
  maxSpeed: "normal",
  initSpeed: "normal",
  keep: true,
};

const About = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <Section id="about" title="About Me">
      <Content initial="hidden" animate="visible" variants={aboutVariants}>
        <p>
          I'm a passionate software engineer committed to crafting impactful
          user-centered products. Here let's walk through my journey from a
          robotics student to an engineer at Microsoft.
        </p>
        <p>
          After that, you'll see the other side of me as an artist. Regardless
          of the evoving technology that I embrace during work, I keep myself
          cognizant of the world around me by sitting down and painting stroke
          by stoke.
        </p>
      </Content>
      <TagsDiv>
        <span className="tagcloud"></span>
      </TagsDiv>
    </Section>
  );
};

export default About;

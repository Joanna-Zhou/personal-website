import React from "react";
import Section from "./Section";
import styled from "styled-components";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";

const Content = styled(motion.div)`
  color: #bbb;
`;

const ProfileImage = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => (
  <Section id="about" title="About Me">
    <Container>
      <Content initial="hidden" animate="visible" variants={aboutVariants}>
        <ProfileImage src="https://via.placeholder.com/200" roundedCircle />
        <p>
          Hi! I'm Jojo, a passionate software engineer committed to crafting
          impactful user-centered products. With a drive for innovation and
          collaboration, I excel in problem-solving and have delivered diverse
          projects, from generative AI and media editing features to performance
          optimization and experimentation systems.
        </p>
        <p>
          I am also an artist painting stroke by stroke to keep myself cognizant
          of the world around me. I believe that the creative side of human
          being cannot be replaced by machines, and there's always expressions
          that you need to say, sing, or paint in your own way.
        </p>
      </Content>
    </Container>
  </Section>
);

export default About;

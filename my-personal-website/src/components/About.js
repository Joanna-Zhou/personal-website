import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Content = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
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
      <Row>
        <Col>
          <Content
            initial="hidden"
            animate="visible"
            variants={aboutVariants}
          >
            <ProfileImage src="https://via.placeholder.com/200" roundedCircle />
            <p>
              Hi! I'm [Your Name], a passionate web developer with a knack for creating elegant solutions in the least amount of time. I have a rich background in web development, having worked on numerous projects that span from simple static websites to complex web applications. My expertise lies in modern JavaScript frameworks, responsive design, and user experience. I thrive in dynamic environments and am always eager to learn and implement new technologies.
            </p>
            <p>
              Outside of coding, I enjoy exploring the outdoors, playing music, and reading books. I believe in continuous growth and am committed to delivering high-quality work that meets and exceeds expectations.
            </p>
          </Content>
        </Col>
      </Row>
    </Container>
  </Section>
);

export default About;

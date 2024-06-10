import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://via.placeholder.com/1500') no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: 'Arial', sans-serif;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  font-family: 'Georgia', serif;
`;

const Home = () => (
  <Section id="home" title="">
    <HomeWrapper>
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Welcome to My Personal Website
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        This is a brief introduction about you.
      </Subtitle>
    </HomeWrapper>
  </Section>
);

export default Home;

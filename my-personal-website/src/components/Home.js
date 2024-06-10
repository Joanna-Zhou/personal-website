import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('https://via.placeholder.com/1500') no-repeat center center/cover;
  color: #fff;
`;

const Home = () => (
  <HomeWrapper id="home">
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      Welcome to My Personal Website
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      This is a brief introduction about you.
    </motion.p>
  </HomeWrapper>
);

export default Home;

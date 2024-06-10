import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: url('https://via.placeholder.com/1500') no-repeat center center/cover;
`;

const Section = ({ id, title, children }) => (
  <SectionWrapper id={id}>
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  </SectionWrapper>
);

export default Section;

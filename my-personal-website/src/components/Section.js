import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
  padding:6rem 0rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #fff;
`;

const Section = ({ id, title, children }) => (
  <SectionWrapper id={id}>
    {title && (
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
    )}
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

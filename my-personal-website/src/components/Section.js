import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: ${(props) =>
    props.backgroundImage
      ? `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.backgroundImage}) no-repeat center center/cover`
      : '#f8f9fa'};
  background-attachment: fixed;
  color: #fff;
`;

const Section = ({ id, title, children, backgroundImage }) => (
  <SectionWrapper id={id} backgroundImage={backgroundImage}>
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

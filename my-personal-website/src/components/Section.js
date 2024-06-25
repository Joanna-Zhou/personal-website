import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SectionWrapper = styled.section`
  padding: 6rem clamp(0.5rem, 20.5%, 100rem);
  text-align: left;
  position: relative;
  overflow: hidden;
  color: #fff;
`;

const Section = ({ id, title, children }) => (
  <SectionWrapper id={id}>
    {title && (
      <motion.h2
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        {title}
      </motion.h2>
    )}
    <div>{children}</div>
  </SectionWrapper>
);

export default Section;

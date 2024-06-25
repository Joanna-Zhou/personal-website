import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import TypingAnimatedText from "./TypingAnimatedText";

const Card = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  padding-bottom: 0rem;
  text-align: left;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
  border-bottom: 1px solid #333;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s ease;
  // border-radius: 0.5rem;

  &:hover {
    background-color: rgba(229, 231, 235, 0.1);
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 500;
  margin-top: 0.5rem;
`;

const Role = styled(motion.p)`
  font-size: 16px;
  // margin-top: 0.3rem;
`;

const Date = styled(motion.p)`
  text-align: right;
  font-size: 0.875rem;
  margin: 0;
  padding: 0;
`;

const ProjectCard = ({ target, projectTitle, role, date }) => (
  <Card to={target} target="_blank">
    <Details>
      <Title>
        <TypingAnimatedText text={projectTitle} />
      </Title>
      <Role
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 2.5,
          type: "spring",
          damping: 50,
          stiffness: 100,
          delay: 1.0,
        }}>
        {role}
      </Role>
    </Details>
    <Date
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 3.5, delay: 1.0 }}>
      {date}
    </Date>
  </Card>
);

export default ProjectCard;

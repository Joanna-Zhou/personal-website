import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Section from './Section';

const ProjectWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  color: #666;
`;

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of project 1', imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Project 2', description: 'Description of project 2', imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, title: 'Project 3', description: 'Description of project 3', imageUrl: 'https://via.placeholder.com/300' },
  { id: 4, title: 'Project 4', description: 'Description of project 4', imageUrl: 'https://via.placeholder.com/300' },
  { id: 5, title: 'Project 5', description: 'Description of project 5', imageUrl: 'https://via.placeholder.com/300' },
];

const Project = () => (
  <Section id="projects" title="My Projects">
    <Container>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xs={12} md={6} lg={4}>
            <ProjectWrapper>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ProjectImage src={project.imageUrl} alt={project.title} />
              </motion.div>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectWrapper>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
);

export default Project;

import React from 'react';
import Section from './Section';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const artworks = [
  { id: 1, src: 'https://via.placeholder.com/300', alt: 'Artwork 1' },
  { id: 2, src: 'https://via.placeholder.com/300', alt: 'Artwork 2' },
  { id: 3, src: 'https://via.placeholder.com/300', alt: 'Artwork 3' },
  { id: 4, src: 'https://via.placeholder.com/300', alt: 'Artwork 4' },
  { id: 5, src: 'https://via.placeholder.com/300', alt: 'Artwork 5' },
  { id: 6, src: 'https://via.placeholder.com/300', alt: 'Artwork 6' },
  { id: 7, src: 'https://via.placeholder.com/300', alt: 'Artwork 7' },
  { id: 8, src: 'https://via.placeholder.com/300', alt: 'Artwork 8' },
  { id: 9, src: 'https://via.placeholder.com/300', alt: 'Artwork 9' },
  { id: 10, src: 'https://via.placeholder.com/300', alt: 'Artwork 10' },
];

const Gallery = () => (
  <Section id="gallery" title="My Artworks">
    <Container>
      <Row>
        {artworks.map((artwork) => (
          <Col key={artwork.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={artwork.src} alt={artwork.alt} thumbnail />
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
);

export default Gallery;

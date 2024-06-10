import React, { useEffect } from 'react';
import styled from 'styled-components';

const StarryWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: glitter 2s infinite;
  
  @keyframes glitter {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

const StarryBackground = () => {
  useEffect(() => {
    const stars = Array.from({ length: 100 }, (_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`
    }));

    const starElements = stars.map((star, index) => (
      <Star
        key={index}
        style={{ top: star.top, left: star.left, animationDelay: star.animationDelay }}
      />
    ));

    document.getElementById('star-container').append(...starElements);
  }, []);

  return <StarryWrapper id="star-container" />;
};

export default StarryBackground;

import React from "react";
import styles from "../styles/StarryBackground.module.css";
import styled from "styled-components";
import headerImg from "../assets/images/Angel.PNG";

const Image = styled.img`
  z-index: 0;
  position: absolute;
  top: -2%;
  left: 4%;
  padding-left: 3%;
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    margin-top: -90px;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const Background = () => (
  <div>
    <div className={styles.stars}></div>
    <div className={styles.twinkling}></div>
    <Image src={headerImg} alt="Header Img" />
  </div>
);

export default Background;

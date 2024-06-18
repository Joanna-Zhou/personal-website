import React from "react";
import styles from "../styles/StarryBackground.module.css";
import styled from "styled-components";
import headerImg from "../assets/images/Angel.PNG";

const Image = styled.img`
  z-index: 0;
  top: -2%;
  left: 4%;
  padding-left: 3%;
  // right: 13%;
  position: absolute;
  horizontal-align: right;
  vertical-align: top;
`;

const Background = () => (
  <div>
    <div className={styles.stars}></div>
    <div className={styles.twinkling}></div>
    <Image src={headerImg} alt="Header Img" />
  </div>
);

export default Background;

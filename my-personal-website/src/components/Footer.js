import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import Section from "./Section";
import "animate.css";
import TrackVisibility from "react-on-screen";
import githubIcon from "../assets/images/white-github-icon.svg";
import linkedinIcon from "../assets/images/linkedin-icon.svg";
import instaIcon from "../assets/images/instagram-icon.svg";

const Email = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

const CopyRight = styled.p`
  font-size: small;
  text-align: center;
  margin-top: 7rem;
  margin-bottom: -3rem;
  opacity: 0.7;
`;

const ButtonStyled = styled.button`
  font-weight: 700;
  margin-top: 8px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.7);
  padding: 9px 26px;
  font-size: 16px;
  border-radius: 40px;
  // margin-left: 12px;
  bottom: 4px;
  position: relative;
  background-color: transparent;
  transition: 0.3s ease-in-out;

  &::before {
    content: "";
    width: 0%;
    height: 0%;
    position: absolute;
    background-color: #fff;
    border-radius: 40px;
    left: 50%;
    top: 50%;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    color: #121212;
  }
  &:hover::before {
    content: "";
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 40px;
    height: 100%;
    position: absolute;
  }
`;

const Footer = () => {
  return (
    <Section title="Get in Touch" className="footer" id="connect">
      <div>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h6>Happy to chat anytime :)</h6>
            <Email href="mailto:joanna.zyz@outlook.com">
              joanna.zyz@outlook.com
            </Email>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Joanna-Zhou" target="_blank">
                <img src={githubIcon} alt="Github" />
              </a>
              <a
                href="https://www.linkedin.com/in/yizhi-jojo-zhou/"
                target="_blank">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/jojojoz._/" target="_blank">
                <img src={instaIcon} alt="Instagram" />
              </a>
              <ButtonStyled
                href="../assets/files/JojoZhou_Resume_2024.pdf"
                target="_blank"
                rel="noopener noreferrer">
                Resume
              </ButtonStyled>
            </div>
          </Col>
        </Row>
        <CopyRight>
          Copyright © 2024 Jojo (Yizhi) Zhou. All Rights Reserved
        </CopyRight>
      </div>
    </Section>
  );
};

export default Footer;

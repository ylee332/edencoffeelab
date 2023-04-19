import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333333;
  color: #ffffff;
`;

const SocialLinks = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #ffffff;
  background-color: #c1413e;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: #c1413e;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <SocialLinks>
        <SocialLink href="#">
          <i className="fab fa-facebook-f"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-twitter"></i>
        </SocialLink>
        <SocialLink href="#">
          <i className="fab fa-instagram"></i>
        </SocialLink>
      </SocialLinks>
      <Copyright>
        &copy; 2023 Eden Coffee Lab. All rights reserved.
      </Copyright>
    </Container>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #353f46;
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
  color: #080e11;
  background-color: #b1b1ab;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #69716a;
    color: #c1413e;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: #ebebea;
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

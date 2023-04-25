import React from 'react';
import styled from 'styled-components';
import logo from '../assets/eden_logo_title.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ebebea;
  background-size: cover;
`;

const Logo = styled.img`
height: 25rem;

`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #080e11;
  text-align: center;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} alt="Eden Coffee Title" />
      <Description>
        Coming Soon!
      </Description>
    </Container>
  );
};

export default Home;
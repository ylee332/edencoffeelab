import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/assets/coffee-beans.jpg');
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #333639;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  text-align: center;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #333639;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Eden Coffee Lab</Title>
      <Description>
        Coming Soon!
      </Description>
    </Container>
  );
};

export default Home;
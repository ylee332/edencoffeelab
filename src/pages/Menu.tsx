import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ebebea;
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #333639;
  text-align: center;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #333639;
  text-align: center;
`;

const Menu: React.FC = () => {
  return (
    <Container>
      <Title>Menu</Title>
      <Description>
        Espresso
      </Description>
      <Description>
        Americano
      </Description>
      <Description>
        Drip Coffee
      </Description>
      <Description>
        Latte
      </Description>
      <Description>
        Cortado
      </Description>
    </Container>
  );
};

export default Menu;
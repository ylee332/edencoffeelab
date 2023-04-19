import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333639;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 3rem;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavLink = styled(Link)`
  margin-left: 2rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: #333639;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #8d6e63;
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src="/assets/logo.png" alt="Eden Coffee Lab Logo" />
      <Nav>
        <NavLink to="/">Home</NavLink>
      </Nav>
    </Container>
  );
};

export {}; 
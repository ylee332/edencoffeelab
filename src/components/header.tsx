import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/eden_logo.png'


const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #353f46;
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
  color: #ebebea;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #6c6a60;
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} alt="Eden Coffee Title" />
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
      </Nav>
    </Container>
  );
};

export default Header; 
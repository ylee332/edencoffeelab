import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/footer';
import Header from './components/header';

import Home from './pages/Home';
import Menu from './pages/Menu';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const App: React.FC = () => {
  return (
    <Router>
      <Container>
      <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>

        </Main>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;

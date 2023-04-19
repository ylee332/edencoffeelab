import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/home';
import Footer from './components/footer';

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
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;

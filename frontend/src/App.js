import { Container } from "react-bootstrap";
import React from 'react';
import Header from "./components/Header"
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './assets/styles/bootstrap.custom.css';

const App = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
          </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
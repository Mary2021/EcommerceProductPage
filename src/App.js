import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Container from 'react-bootstrap/esm/Container'
import Header from './layouts/Header'


function App() {
  return (
    <Container fluid className='orange'>
        <Header />
      <main>
        Sneaker Company

        Fall Limited Edition Sneakers

        These low-profile sneakers are your perfect casual wear companion. Featuring a
        durable rubber outer sole, they’ll withstand everything the weather can offer.

        $125.00
        50%
        $250.00

        0
        Add to cart
      </main>
      <footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" >Frontend Mentor</a>.
        Coded by <a href="https://github.com/Mary2021">Mary P</a>.
      </footer>
    </Container>
  );
}

export default App;

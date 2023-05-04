import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Container from 'react-bootstrap/esm/Container'
import Header from './layouts/Header'
import Main from './layouts/Main'

function App() {
  return (
    <Container className='appContainer p-0'>
      <Header />
      <Main />
      <Container>
        <footer className='footerContainer'>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" >Frontend Mentor</a>.
          Coded by <a href="https://github.com/Mary2021">Mary P</a>.
        </footer>
      </Container>
    </Container>
  );
}

export default App;

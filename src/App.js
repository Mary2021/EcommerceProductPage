import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Container from 'react-bootstrap/esm/Container'
import Header from './layouts/Header'
import Main from './layouts/Main'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Context } from './components/context';

function App() {
  const [data, setData] = useState(0)

  const sendData = (data) => {
    setData(data)
  }

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs"
    >
      <Container className='appContainer p-0'>
      <Context.Provider value={data}>
        <Header />
        </Context.Provider>
        <Main sendData={sendData} />
        <Container>
          <footer className='footerContainer'>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" >Frontend Mentor</a>.
            Coded by <a href="https://github.com/Mary2021">Mary P</a>.
          </footer>
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;

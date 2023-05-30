import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Container from 'react-bootstrap/esm/Container'
import Header from './layouts/Header'
import Main from './layouts/Main'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { CountContext, AddContext } from './components/context';

function App() {
  const [count, setCount] = useState(0)
  const [add, setAdd] = useState(false)

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs"
    >
      <Container className='appContainer p-0'>
      <AddContext.Provider value={[add, setAdd]}>
      <CountContext.Provider value={[count, setCount]}>
        <Header />
        <Main />
        </CountContext.Provider>
        </AddContext.Provider>
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

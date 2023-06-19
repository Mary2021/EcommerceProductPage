import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Container from 'react-bootstrap/esm/Container'
import Header from './layouts/Header'
import Main from './layouts/Main'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
//Store
import { store } from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs"
    >
      <Container className='appContainer p-0'>
      <Provider store={store}>
        <Header />
        <Main />
        </Provider>
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

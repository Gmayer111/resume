import React, { useEffect } from 'react';
import './App.scss';
import Home from 'pages/Home';
import About from 'pages/About';
import Resume from 'pages/Resume';
import Portfolio from 'pages/Portfolio';
import Contact from 'pages/Contact';
import { Route, Routes, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import Header from 'components/Header/Header';
import styled from 'styled-components/macro';


const App = () => {

  const location = useLocation();
  let transitions = useTransition(location, {
    from: { 
      opacity: 0, transform: 'perspective(6000px) rotateY(180deg) scale(0.2, 0.3)',
    },
    enter: { 
      opacity: 1,transform: 'perspective(8000px) rotateY(0deg) scale(1, 1)',
    },
    config: { mass: 3, tension: 700, friction: 400 },
  })

  useEffect(() => {
    transitions = '';
  }, [])

  return transitions((props, item) => (
    
    <>
    <Wrapper className='body-container'>
      <Header />
      <animated.div style={props} className='mainContainer'>
          <Routes location={item}>
            <Route path="/" element={<Home />}/>
            <Route path="a-propos" element={<About />}/>
            <Route path="parcours" element={<Resume />}/>
            <Route path="portfolio" element={<Portfolio />}/>
            <Route path="contact" element={<Contact />}/>
          </Routes>
      </animated.div>         
    </Wrapper>
 
    </>

  )) 
}



const Wrapper = styled.div`
  font-size: 16px;
  background-color: #6B6C6D;
  display: grid;
  grid-template-columns: 15vw auto;
  grid-template-rows: 70vh 30vh auto;
  margin: 0;

  .mainContainer {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    overflow: hidden;
  }

  @media screen and (max-width: 1000px) {

    .body-container {
      display: grid;
      grid-template-columns: 100vw;
      grid-template-rows: 70vh 30vh auto;      
    }

    .mainContainer {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 4;
      //overflow: hidden;
    }




  }



  
`

export default App;

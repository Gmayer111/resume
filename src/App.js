import './App.css';
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
  const transitions = useTransition(location, {
    from: { 
      opacity: 0, transform: 'perspective(3000px) rotateY(180deg)',
    },
    enter: { 
      opacity: 1,transform: 'perspective(3000px) rotateY(0deg)',
    },
    config: { mass: 3, tension: 700, friction: 400 },
  })

  return transitions((props, item) => (
    <>
    <Wrapper>
      <Header />
      <animated.div style={props} className='mainContainer'>
        <Routes location={item}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </animated.div>         
    </Wrapper>
 
    </>

  )) 
}

const Wrapper = styled.div`
  min-height: 100%;
  font-size: 16px;
  background-color: grey;
  display: grid;
  grid-template-columns: 15vw auto;
  grid-template-rows: 70vh 30vh auto;
  margin: 0;

  .mainContainer {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    height: auto;
  }
  
`

export default App;

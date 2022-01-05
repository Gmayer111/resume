import { Route, Routes } from 'react-router-dom';
import { Transition, animated } from 'react-spring'
import styled from 'styled-components/macro';



const AnimatedRoute = ({ children }) => (

    <Routes>
        <Route
        render={({ location }) => (
            <Transition 
            native
            items={location}
            keys={location => location.pathname}
            from={{ opacity: 0, transform: 'perspective(900px) rotateY(180deg)'}}
            enter={{ opacity: 1,transform: 'perspective(900px) rotateY(0deg)'}}
            leave={{ opacity: 0,transform: 'perspective(900px) rotateY(-180deg)', pointerEvents: 'none'}}>
            {location => style => <Container style={style}>{children(location)}</Container>}
            </Transition>
        )}
        />        
    </Routes>

)

  const Container = styled(animated.div)`
  position: absolute;
  backgroundColor: blue;
  width: 100%;
`

export default AnimatedRoute;
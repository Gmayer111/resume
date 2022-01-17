import React from 'react';
import styled from 'styled-components/macro';

function FlipPage(props) {

  return(
    <Wrapper>
      <main>
        <div className="container">
          <div className="blockTitle">
              <h1>{ props.title }</h1>
              <div className="blockLogo">
                  { props.logo }
              </div>
          </div>
          <section>
            {props.children}
          </section>
        </div>        
      </main>

    </Wrapper>    
  )

}

  const Wrapper = styled.div`

    width: 100%;
    background-color: #2c2d2f;
    display: flex;
    justify-content: center;
    margin-bottom: 200px;

    main {
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;
    }

    .container {
      width: 90%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .blockTitle {
      margin-top: 4rem;
      display: flex;
      justify-content: space-between;
      padding: 0;
      width: 100%;
      height: 45%;
      border-bottom: 1px dashed grey;
    }

    h1 {
      position: inherit;
      font-family: 'Playfair Display', serif;
      font-size: 36px;
      font-weight: 700;
      color: #00a3e1;
  }

  .blockLogo {
      font-size: 36px;
      color: #00a3e1;

  }

  section {
    width: 100%;
  }
`

export default FlipPage;
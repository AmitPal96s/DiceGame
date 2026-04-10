import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Buttons';
const Home = ({
    toggle
}) => {
    return (
        <Container>
            <div>      <img src="/images/dice.png" alt="Dice Game" />
            </div>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    )
}

export default Home;
const Container = styled.div`
  
  display: flex;
  max-width: 1190px;
    margin: 0 auto;
    height: 100vh;
    align-items: center;
   .content {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }

}

`




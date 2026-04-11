import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Buttons';
const Home = ({
    toggle
}) => {
    return (
        <Container>
            <ImageWrapper>      <img src="/images/dice.png" alt="Dice Game" />
            </ImageWrapper>
            <Content>
                <Title>DICE GAME</Title>
                <StyledButton onClick={toggle}>Play Now</StyledButton>
            </Content>
        </Container>
    )
}

export default Home;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1190px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  gap: 40px;
  box-sizing: border-box;

  /* Desktop & Laptop: Side-by-side layout */
  flex-direction: row;

  /* Tablet & Mobile: Stack vertically */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.15));
  }

  @media (max-width: 768px) {
    img {
      max-width: 400px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 300px;
    }
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 96px;
  font-weight: 900;
  color: #111;
  line-height: 1.1;
  letter-spacing: 2px;

  @media (max-width: 1024px) {
    font-size: 72px;
  }

  @media (max-width: 768px) {
    font-size: 56px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    letter-spacing: 1px;
  }
`;

const StyledButton = styled(Button)`
  padding: 14px 40px;
  font-size: 20px;
  border-radius: 12px;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 260px;
    font-size: 16px;
    padding: 12px 24px;
  }
`;





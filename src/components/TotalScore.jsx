import React from 'react'
import styled from 'styled-components'
import {media} from '../styled/hlo';

const TotalScore = ({ totalScore }) => {
    return (
        <ScoreContainer>
            <h1>{totalScore}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    )
}

export default TotalScore
const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
    h1{
        font-size: 100px;
        line-height: 100px;
        
    }
    p{
        font-size: 24px;
    }
    @media ${media.tablet} {
    h1 {
      font-size: 3rem;
    }
  }

  @media ${media.mobile} {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`

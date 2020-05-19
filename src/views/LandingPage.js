import React, { useMemo } from 'react'
import styled, { keyframes } from 'styled-components'

const MoveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-9rem);
    }

    80% {
        transform: translateX(1rem);
        opacity: 0.2;
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

const MoveInRight = keyframes`
    0% {
        transform: translateX(7rem);
        opacity: 0;
    }

    50% {
        transform: translateX(-1rem);
    }
    
    100% {
        transform: translateX(0);
    }
`

const MainContainer = styled.div`
  padding: 1rem;
  /* font-size: 62.5%; */
  background-image: linear-gradient(to bottom, #eee, #aaa);
  background-attachment: fixed;
  & > header {
    background-image: linear-gradient(
        to bottom left,
        hsl(225, 60%, 35%, 0.8),
        hsl(255, 60%, 45%, 0.8)
      ),
      url(https://picsum.photos/id/184/${window.innerWidth}/${window.innerHeight});
    height: 95vh;
    background-attachment: fixed;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);

    & .text-box {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      & > h4 {
        font-family: 'Open Sans', sans-serif;
        text-transform: uppercase;
        color: #fff;
        backface-visibility: hidden;
        & span.title {
          display: block;
          font-weight: 400;
          font-size: 4rem;
          letter-spacing: 2rem;
          animation: ${MoveInLeft} 2s ease-in-out 1;
        }
        & span.sub-title {
          display: block;
          font-weight: 400;
          font-size: 1.4rem;
          padding-left: 0.65rem;
          letter-spacing: 1rem;
          animation: ${MoveInRight} 1.5s ease-in-out 1;
        }
      }
    }
  }
  & > .last-view {
    height: 50vh;
    background-color: red;
    clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 100%);
  }
  & .main-content {
    display: flex;
    flex-direction: row;
    background-color: green;
  }
`

const LandingPage = props => {
  useMemo(() => [props], [props])
  const [stars] = React.useState(() => {
    const a = []
    for (let i = 0; i < 50; i++) {
      a.push([Math.random() * 90, Math.random() * 70])
    }
    return a
  })
  return (
    <MainContainer>
      <header className='page-header'>
        <div></div>
        <div className='text-box'>
          <h4>
            <span className='title'>SPACELAB</span>
            <span className='sub-title'>forging components</span>
          </h4>
        </div>
      </header>
      <div className='main-content'></div>
    </MainContainer>
  )
}

export default LandingPage

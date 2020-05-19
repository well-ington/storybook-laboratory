import React, { useMemo } from 'react'
import styled from 'styled-components'
import OptionsButton from './OptionsButton'

const MainContainer = styled.div`
  font-size: 62.5%;
  font-family: "Open Sans", sans-serif;
  align-items: space-between;
  margin: 0.5em;
  border-radius: 0.5em;
  width: ${window.innerWidth < 500 ? '100vw' : '45em'};
  position: relative;
  &.list-mode {
    display: flex;
    justify-content: space-between;
    & img {
      width: 10em;
      height: 10em;
    }
  }
  &.text-only {
  }  
  color: hsl(255, 10%, 20%);  
  & > .title {
    margin-top: 0.2em;
    font-weight: 700;
    font-size: 1.6em;
    letter-spacing: 0.2em;
  }
  & > .description {
    font-size: 1.2em;
    position: absolute;
    color: hsl(255, 10%, 40%);
    top: 2em;
  }
  & > .author {
    font-size: 1.2em;
    position: absolute;
    bottom: 0.4em;        
  }  
  & > .published {
    position: absolute;
    margin-top: -1em;    
    color: hsl(255, 10%, 40%);
    font-size: 1.2em;
    bottom 0;
  }
  & div.action-button {
    position: absolute;
    right: 13.6em;
    bottom: 0.7em;
  }
`

const Card = props => {
  useMemo(() => [props.title], [props])
  return (
    <MainContainer
      className={`${props.list && 'list-mode'} ${props.color && props.color}`}
    >
      <p className='title'>{props.title}</p>
      <span className='description'>{props.description}</span>
      <p className='author'>{props.author}</p>
      <span className='published'>{props.published}</span>
      <img src={props.image} />
      <div className='action-button'>
        <OptionsButton>
          <p>some options</p>
        </OptionsButton>
      </div>
    </MainContainer>
  )
}

export default Card

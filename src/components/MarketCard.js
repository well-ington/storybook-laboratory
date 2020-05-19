import React, { useMemo } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  position: relative;
  border-radius: 5px;
  display: flex;
  margin: 0.4em;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 12rem;
  background-color: #eee;
  box-shadow: 2px 2px 4px #00000055;
  & > img {
    width: 12rem;
    height: 12rem;
    opacity: 0.5;
    transition: 1s;
    background-color: #eeeeee;
    z-index: 0;
  }

  & > div {
    width: 100%;
  }

  &:hover {
    & > img {
      opacity: 0.9;
    }
  }
`

const TextContainer = styled.div`
  font-family: Heveltica, Arial, Verdana;
  top: 5em;
  & > h4 {
    text-transform: uppercase;
    margin-top: 10px;
    color: hsl(255, 10%, 30%);
    padding: 0 0.2em;
    font-size: 1.4em;
    letter-spacing: 1px;
    text-align: left;
  }
  & > p {
    padding: 0 0.2em;
    margin-top: -1.2em;
    font-weight: 300;
    font-size: 12px;
    font-weight: 300;
    color: hsl(225, 10%, 25%);
  }
  & > .price {
    position: absolute;
    font-size: 32px;
    right: 0.2em;
    color: #ffffff;
    font-weight: 600;
    background-image: radial-gradient(#00000055, transparent 50%);
    text-shadow: 0 0 4px #000000, 1px 1px 2px #000;
    top: 120px;
    z-index: 1;
  }

  & > div {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: hsl(225, 15%, 15%);
    position: absolute;
    left: 0.5em;
    bottom: 0;
    & span {
      color: hsl(225, 15%, 45%);
      margin-top: -1em;
    }
  }
`

// const ActionContainer = styled.div`
// 		left: calc(50% - 10px);
// 		position: absolute;
// 		top: 0;
// `;

const MarketCard = props => {
  useMemo(() => [props.description, props.title], [
    props.description,
    props.title
  ])
  return (
    <MainContainer
      className={`bg-${props.bgcolor} ${props.list && 'list'} ${props.list &&
        'list-mode'}`}
    >
      <TextContainer>
        {props.title && <h4>{props.title}</h4>}
        {props.description && <p>{props.description}</p>}
        {props.price && (
          <span className='price'>${props.price.toFixed(2)}</span>
        )}
      </TextContainer>
      <img src={props.image} />
    </MainContainer>
  )
}

export default MarketCard

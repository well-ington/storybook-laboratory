import React from 'react';
import styled from 'styled-components';
import TextBox from './TextBox';

const CardContainer = styled.div`
    display: inline-block;
    border-radius: 5px;
    padding: 1em 2em;
    box-shadow: 1px 1px 4px #000000aa;
`;

const Card = (props) => {
    return <CardContainer>
        <TextBox>        
        {props.children}
        </TextBox>
    </CardContainer>
}

export default Card;
import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.div`
    font-family: Helvetica, Arial, sans-serif;
    color: hsl(255, 10%, 10%);
    &.opt-center {
        text-align: center;
    }
    &.opt-right {
        text-align: right;
    }
`;

const TextBox = (props) => {
    return <TextContainer 
    className={`${props.center && 'opt-center'} ${props.right && 'opt-right'}`}
    
    >
        {props.children}
    </TextContainer>
}

export default TextBox;
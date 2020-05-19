import React, { useMemo } from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
    margin: 1.5em;
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 1em 4em;
    box-shadow: 0 0 2px hsl(255, 10%, 5%, 0.4);
    font-family: Helvetica, Arial, sans-serif;
    border-radius: 5px;
    &.alert-info {
        background-image: linear-gradient(to right, hsl(255, 90%, 55%) 0%, hsl(255, 70%, 55%) calc(3em), white 3em);
        &::before {
            content: '📢';
            font-weight: 600;
            font-size: 20px;
            font-family: sans-serif;
            position: absolute;
            color: white;
            top: 10px;
            left: calc(1.5em - 20px);
        }
    }
    &.alert-warning {
        background-image: linear-gradient(to right, hsl(30, 90%, 55%) 0%, hsl(30, 80%, 55%) calc(3em), white 3em);
        &::before {
            content: '!';
            font-weight: 600;
            font-size: 20px;
            font-family: sans-serif;
            position: absolute;
            color: white;
            top: 12px;
            left: calc(1.5em - 10px);
        }
    }
    &.alert-error {
        background-image: linear-gradient(to right, hsl(350, 90%, 55%) 0%, hsl(350, 70%, 45%) calc(3em), white 3em);
        &::before {
            content: 'x';
            font-weight: 600;
            font-size: 20px;
            font-family: sans-serif;
            position: absolute;
            color: white;
            top: 12px;
            left: calc(1.5em - 12px);
        }
    }
    &.alert-success {
        background-image: linear-gradient(to right, hsl(450, 90%, 45%) 0%, hsl(450, 70%, 45%) calc(3em), white 3em);
        &::before {
            content: '✔';
            font-weight: 600;
            font-size: 20px;
            font-family: sans-serif;
            position: absolute;
            color: white;
            top: 12px;
            left: calc(1.5em - 15px);
        }
    }
    &.alert-tip {
        background-image: linear-gradient(to right, hsl(255, 10%, 25%) 0%, hsl(255, 30%, 25%) calc(3em), white 3em);
        &::before {
            content: '🖊';
            font-weight: 600;
            font-size: 20px;
            font-family: sans-serif;
            position: absolute;
            color: white;
            top: 12px;
            left: calc(1.5em - 17px);
        }
    }
`;




const Alert = (props) => {
    useMemo(() => [props, props.children]);
    return <AlertContainer className={`alert-cont alert-${props.type}`}>
        {props.children}
    </AlertContainer>
}

export default Alert;
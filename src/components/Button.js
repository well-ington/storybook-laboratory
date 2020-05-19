import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useMemo } from 'react';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingIcon = styled.div`
	width: 18px;
	height: 18px;
	border-radius: 50%;
	&.animated {
		animation: ${rotate} 5s linear infinite;
	}
	border: 2px solid #000000aa;
	border-left: 2px solid #00000025;
	box-shadow: 2px 0px 4px #00000025, inset 0 0 10px #aaaaaa36;
	&.primary {
		border: 2px solid #ffffffdd;
		border-left: 2px solid #aaaaaa55;
		box-shadow: 2px 0px 4px #ffffff55, inset 0 0 10px #00000016;
	}
`;

const ButtonContainer = styled.div`
	font-family: Helvetica, sans-serif, apple-system;
	display: inline-block;
	font-size: 18px;
	text-transform: uppercase;
	&.btn-primary {
		background-color: hsl(265, 80%, 45%);
		box-shadow: 2px 2px 4px #00000075;
		color: white;		
		border: 1px solid #00000025;
		&.btn-color-red {
			background-color: hsl(350, 70%, 45%);
		}
		&.btn-color-green {
			background-color: hsl(150, 70%, 45%);
		}
		&.btn-color-orange {
			background-color: hsl(25, 70%, 55%);
		}
	}

	&.btn-secondary {
		background-color: transparent;
		color: hsl(265, 80%, 45%);
		border: 1px solid hsl(265, 80%, 45%);
		&.btn-color-red {
			color: hsl(350, 70%, 45%);
			border-color: hsl(350, 70%, 45%);
		}
		&.btn-color-green {
			color: hsl(150, 70%, 45%);
			border-color: hsl(150, 70%, 45%);
		}
		&.btn-color-orange {
			color: hsl(25, 70%, 55%);
			border-color: hsl(25, 70%, 55%);
		}
	}

	&.btn-text {
		background-color: transparent;
		border: transparent;		
		&.btn-color-red {
			color: hsl(350, 70%, 45%);
		}
		&.btn-color-green {
			color: hsl(150, 70%, 45%);
		}
		&.btn-color-orange {
			color: hsl(25, 70%, 55%);
		}
		&.btn-color-blue {
			color: hsl(225, 70%, 55%);
		}
		color: hsl(265, 40%, 45%);
	}

	&.btn-small {
		padding: 0.12em 0.25em;
	}
	&.btn-medium {
		padding: 0.25em 0.5em;
	}
	&.btn-large {
		padding: 0.5em 1em;
	}

	&.btn-rounded-full {
		border-radius: 100px;
	}

	&.btn-rounded-lg {
		border-radius: 5px;
	}

	&.btn-on {
		cursor: pointer;
		transition: 500ms;
		&:hover {
			background-image: radial-gradient(#00000005, #00000028);
		}
	}
	&.btn-off {
		opacity: 0.5;
	}
`;

const Button = props => {
	useMemo(() => [props.children, props.type]);
	return (
		<ButtonContainer
			className={`btn-${props.type ? props.type : 'primary'} 
			btn-${props.small ? 'small' : props.medium ? 'medium' : 'large'}
			btn-${props.rounded ? 'rounded-full' : 'rounded-lg'}
			btn-color-${props.color}
			btn-${props.disabled ? 'off' : 'on'}`}
		>
			{props.loading && <LoadingIcon className={`${props.animated && 'animated'} ${props.type}`} />}
			{props.children}
		</ButtonContainer>
	);
};

export default Button;

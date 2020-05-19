import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';

const MainOptContainer = styled.div`
	font-family: "Open Sans";
    position: relative;
	& > div.opt-image {
        width: 26px;
        height: 26px;
        border-radius: 13px;
        cursor: pointer;
        &.active {
            background-color: yellow;
        }    
		& > span {
			width: 5px;
			height: 5px;
			border-radius: 5px;
			background-color: #333;
			position: absolute;
            top: 10px;
            left: 3px;
			&::before {
				content: '';
				width: 5px;
				height: 5px;
				border-radius: 50%;
				background-color: #333;
				margin-left: 8px;
				position: absolute;
			}

			&::after {
				content: '';
				width: 5px;
				height: 5px;
				border-radius: 50%;
				background-color: #333;
				top: 0;
				left: 16px;
				position: absolute;
			}
		}
	}
	& > div.hidden-menu {
		transition: 500ms;
		position: absolute;
		background-color: #eeeeeedd;
		position: absolute;
		align-items: center;
		display: flex;
		flex-direction: column;
		box-shadow: 2px 2px 4px #333333aa;
		border-radius: 5px;
		color: #555555;
		top: 36px;
		width: 100px;
		padding: 0.2em;
		font-size: 16px;
		left: -37px;
		&::before {
			content: '';
			border: 10px solid transparent;
			border-bottom: 10px solid #eeeeee;
			position: absolute;
			top: -20px;
			left: calc(50% - 10px);
		}
		&.show-options {
			opacity: 1;
			z-index: 15;
		}
		opacity: 0;
	}
`;

const OptionsButton = props => {
    const [showopt, setOpt] = useState(false);
	useMemo(() => [showopt, props.children], [showopt, props.children]);
	return (
		<MainOptContainer>
			<div className={`${showopt && "active"} opt-image`} onClick={() => setOpt(!showopt)}>
				<span />
			</div>

			<div className={`hidden-menu ${showopt && 'show-options'}`}>
				{props.children}
			</div>
		</MainOptContainer>
	);
};

export default OptionsButton;


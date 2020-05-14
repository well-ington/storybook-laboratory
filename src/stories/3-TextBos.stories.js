import React from 'react';
import {storiesOf} from '@storybook/react';
import TextBox from '../components/TextBox';

storiesOf('TextBox', module)
    .add('main', () => (<TextBox><p>Simple info</p></TextBox>))
    .add('title and description centered', () => (<TextBox center>
        <h3>Some title!</h3>
        <p>some random description</p>        
        </TextBox>));

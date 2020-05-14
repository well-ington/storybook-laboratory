import React from 'react';
import {storiesOf} from '@storybook/react';
import Card from '../components/Card';

storiesOf('Card', module)
    .add('main', () => (<Card>
        <h3>Title</h3>
        <p>Some lorem ipsum incum alec on am.</p>
    </Card>))
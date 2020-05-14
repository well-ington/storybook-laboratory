import React from 'react';
import {storiesOf} from '@storybook/react';
import Alert from '../components/Alert';

storiesOf('Alert', module)
  .add('info', () => (<Alert type="info">Some random info</Alert>))
  .add('warning', () => (<Alert type="warning">Some random warning</Alert>))
  .add('error', () => (<Alert type="error">Some random error</Alert>))
  .add('success', () => (<Alert type="success">Some random success</Alert>))
  .add('tip', () => (<Alert type="tip">Some random tip :)</Alert>))
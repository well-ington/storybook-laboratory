import React from 'react'
import { storiesOf } from '@storybook/react'
import OptionsButton from '../components/OptionsButton'

storiesOf('OptionsButton', module).add('main', () => (
  <OptionsButton>
    <p>some options</p>
  </OptionsButton>
))

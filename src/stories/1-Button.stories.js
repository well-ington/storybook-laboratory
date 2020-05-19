import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../components/Button'

storiesOf('Button', module)
  .add('main', () => <Button type='primary'>Button</Button>)
  .add('secondary', () => <Button type='secondary'>Button</Button>)
  .add('text', () => <Button type='text'>Button</Button>)
  .add('small primary', () => (
    <Button type='primary' small>
      Button
    </Button>
  ))
  .add('medium primary', () => (
    <Button type='primary' medium>
      Button
    </Button>
  ))
  .add('large primary', () => (
    <Button type='primary' large>
      Button
    </Button>
  ))
  .add('rounded primary', () => (
    <Button type='primary' rounded>
      Button
    </Button>
  ))
  .add('red primary', () => (
    <Button type='primary' color='red'>
      Button
    </Button>
  ))
  .add('red secondary', () => (
    <Button type='secondary' color='red'>
      Button
    </Button>
  ))
  .add('red text', () => (
    <Button type='text' color='red'>
      Button
    </Button>
  ))
  .add('orange primary', () => (
    <Button type='primary' color='orange'>
      Button
    </Button>
  ))
  .add('orange secondary', () => (
    <Button type='secondary' color='orange'>
      Button
    </Button>
  ))
  .add('orange text', () => (
    <Button type='text' color='orange'>
      Button
    </Button>
  ))
  .add('green primary', () => (
    <Button type='primary' color='green'>
      Button
    </Button>
  ))
  .add('green secondary', () => (
    <Button type='secondary' color='green'>
      Button
    </Button>
  ))
  .add('green text', () => (
    <Button type='text' color='green'>
      Button
    </Button>
  ))
  .add('primary loading animated', () => (
    <Button loading animated type='primary'></Button>
  ))
  .add('secondary loading animated', () => (
    <Button loading animated type='secondary'></Button>
  ))
  .add('text loading animated', () => (
    <Button loading animated type='text'></Button>
  ))

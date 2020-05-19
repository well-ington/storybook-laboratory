import React from 'react'
import { storiesOf } from '@storybook/react'
import MarketCard from '../components/MarketCard'

storiesOf('Market Card', module)
  .add('Marketplace item card', () => (
    <MarketCard
      title='Some old thing'
      price={Math.floor(Math.random() * 50) + 45}
      image={`https://picsum.photos/${Math.floor(Math.random() * 150) + 150}`}
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      link='#'
    ></MarketCard>
  ))
  .add('Multiple marketplace item card', () => (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MarketCard
        title='Some old thing'
        price={Math.floor(Math.random() * 50) + 45}
        image={`https://picsum.photos/${Math.floor(Math.random() * 150) + 150}`}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        link='#'
      ></MarketCard>
      <MarketCard
        title='Some old thing'
        price={Math.floor(Math.random() * 50) + 45}
        image={`https://picsum.photos/${Math.floor(Math.random() * 150) + 150}`}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        link='#'
      ></MarketCard>
      <MarketCard
        title='Some old thing'
        price={Math.floor(Math.random() * 50) + 45}
        image={`https://picsum.photos/${Math.floor(Math.random() * 150) + 150}`}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        link='#'
      ></MarketCard>
    </div>
  ))

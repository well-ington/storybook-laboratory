import React from 'react'
import { storiesOf } from '@storybook/react'
import BlogCard from '../components/BlogCard'
import Button from '../components/Button'

storiesOf('Card', module)
  .add('blog post card', () => (
    <BlogCard
      list
      image={`https://picsum.photos/${Math.floor(Math.random() * 150) + 150}`}
      title='Lorem Ipsum'
      author='Giselle Laranja'
      published={`${
        ['Jan', 'Feb', 'Mar', 'May'][Math.floor(Math.random() * 3)]
      } ${Math.floor(Math.random() * 29) + 1} 20${Math.floor(
        Math.random() * 6
      ) + 14}`}
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      link='#'
    ></BlogCard>
  ))
  .add('multiple blog post card', () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <BlogCard
        type='blog'
        list color="blue"
        image={`https://picsum.photos/${Math.floor(Math.random() * 150) + 150}`}
        title='Lorem Ipsum'
        author='Giselle Laranja'
        published={`${
          ['Jan', 'Feb', 'Mar', 'May'][Math.floor(Math.random() * 3)]
        } ${Math.floor(Math.random() * 29) + 1} 20${Math.floor(
          Math.random() * 6
        ) + 14}`}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        link='#'
      ></BlogCard>
      <BlogCard
        type='blog'
        list color="red"
        image={`https://picsum.photos/${Math.floor(Math.random() * 150) + 150}`}
        title='Lorem Ipsum'
        author='Giselle Laranja'
        published={`${
          ['Jan', 'Feb', 'Mar', 'May'][Math.floor(Math.random() * 3)]
        } ${Math.floor(Math.random() * 29) + 1} 20${Math.floor(
          Math.random() * 6
        ) + 14}`}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        link='#'
      ></BlogCard>
      <BlogCard
        type='blog'
        list color="orange"
        image={`https://picsum.photos/${Math.floor(Math.random() * 150) + 150}`}
        title='Lorem Ipsum'
        author='Giselle Laranja'
        published={`${
          ['Jan', 'Feb', 'Mar', 'May'][Math.floor(Math.random() * 3)]
        } ${Math.floor(Math.random() * 29) + 1} 20${Math.floor(
          Math.random() * 6
        ) + 14}`}
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        link='#'
      ></BlogCard>
    </div>
  ))

  
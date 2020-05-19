import React from 'react'
import { shallow } from 'enzyme'
import BlogCard from '../components/BlogCard'

describe('Card', () => {
  it('Render without crashing', () => {
    const wrapped = shallow(
      <BlogCard title='test' description='desc'></BlogCard>
    )
    expect(wrapped.find('p.title').text()).toEqual('test')
    expect(
      wrapped
        .find('span.description')
        .at(0)
        .text()
    ).toEqual('desc')
  })
})

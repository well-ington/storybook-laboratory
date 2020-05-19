import React from 'react'
import { shallow } from 'enzyme'
import MarketCard from '../components/MarketCard'

describe('MarketCard', () => {
  it('Renders without crashing', () => {
    const randomPrice = Math.floor(Math.random() * 100) + 15
    const wrapper = shallow(
      <MarketCard title='item' description='desc' price={randomPrice} />
    )
    expect(wrapper.find('h4').text()).toEqual('item')
    expect(
      wrapper
        .find('p')
        .at(0)
        .text()
    ).toEqual('desc')
    expect(
      wrapper
        .find('span')
        .at(0)
        .text()
    ).toEqual(`$${randomPrice}.00`)
  })
})

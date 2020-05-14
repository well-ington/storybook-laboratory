import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('Renders without crashing', () => {
    const wrapped = shallow(<App />);
    expect(wrapped.find('code').length).toEqual(1);
  });
})

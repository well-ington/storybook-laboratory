import React from 'react';
import {shallow} from 'enzyme';

import LandingPage from '../views/LandingPage';

describe('Landing Page', () => {
    it('Renders without crashing', () => {
        const wrapped = shallow(<LandingPage />);
        expect(wrapped.find('h4 > span.title').at(0).text()).toEqual('SPACELAB');
    });
});

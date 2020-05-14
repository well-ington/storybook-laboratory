import React from 'react';
import {shallow} from 'enzyme';
import TextBox from '../components/TextBox';

describe('TextBox', () => {
    it('Render without crash', () => {
        const wrapped = shallow(<TextBox><p>Something</p></TextBox>);
        expect(wrapped.find('p').length).toEqual(1);
    })
});
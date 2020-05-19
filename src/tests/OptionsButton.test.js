import React from 'react';
import {shallow} from 'enzyme';
import OptionsButton from '../components/OptionsButton';

describe('Options Button' , () => {
    it('Runs without crashing', () => {
        const wrapped = shallow(<OptionsButton>
            <p>Option A</p>
        </OptionsButton>);
        expect(wrapped.find('p').length).toEqual(1);
    });
    it('Render multiple options', () => {
        const wrapped = shallow(<OptionsButton>
            <p>Option A</p>
            <p>Option B</p>
            <p>Option C</p>
            <p>Option D</p>
        </OptionsButton>);
        expect(wrapped.find('p').length).toEqual(4);
    });
});
import React from 'react';
import {shallow} from 'enzyme';
import Card from '../components/Card';

describe('Card', () => {
    it('Render without crashing', () => {
        const wrapped = shallow(<Card>
            <h3>Title</h3>
            <p>
                Some text
            </p>
        </Card>);
        expect(wrapped.find('h3').length).toEqual(1);
    });
});
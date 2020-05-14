import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../components/Alert';

describe('Alert', () => {
	it('Renders info without crashing', () => {
        const wrapped = shallow(<Alert type="info">some random information</Alert>);
        expect(wrapped.find('.alert-cont').length).toEqual(1);
	});
});

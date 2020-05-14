import React from 'react';
import {shallow} from 'enzyme';
import Button from '../components/Button';

describe('Button', () => {
    it('Render primary without crash', () => {
        const wrapped = shallow(<Button type="primary">Button</Button>);
        expect(wrapped.text()).toEqual('Button');
    });
    it('Render secondary without crash', () => {
        const wrapped = shallow(<Button type="secondary">Button</Button>);
        expect(wrapped.text()).toEqual('Button');
    });
    it('Render text without crash', () => {
        const wrapped = shallow(<Button type="text">Button</Button>);
        expect(wrapped.text()).toEqual('Button');
    });
    it('Render small primary without crash', () => {
        const wrapped = shallow(<Button type="primary" small>Button</Button>);
        expect(wrapped.text()).toEqual('Button');
    });
    it('Render medium primary without crash', () => {
        const wrapped = shallow(<Button type="primary" medium>Button</Button>);
        expect(wrapped.text()).toEqual('Button');
    });
    it('Render large primary without crash', () => {
        const wrapped = shallow(<Button type="primary" large>Button</Button>);
        expect(wrapped.text()).toEqual('Button');
    });
    it('Render rounded primary without crash', () => {
        const wrapped = shallow(<Button type="primary" rounded>Button</Button>);
        expect(wrapped.text()).toEqual('Button');
    });
    it('Render red primary without crash', () => {
        const wrapped = shallow(<Button type="primary" color="red">Button</Button>);
        expect(wrapped.text()).toEqual('Button');
    });
    it('Render unavailable color primary without crash', () => {
        const wrapped = shallow(<Button type="primary" color="asfsfggg">Button</Button>);
        expect(wrapped.text()).toEqual('Button');
    });
    it('Render loading primary static without crash', () => {
        const wrapped = shallow(<Button type="primary" loading></Button>);
        expect(wrapped.find('.btn-primary').length).toEqual(1);
    });
    it('Render loading animated without crash', () => {
        const wrapped = shallow(<Button type="primary" loading animated></Button>);
        expect(wrapped.find('.animated').length).toEqual(1);
    });

});
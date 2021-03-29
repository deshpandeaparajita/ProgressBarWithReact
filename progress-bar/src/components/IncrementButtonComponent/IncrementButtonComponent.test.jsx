import React from 'react';
import { shallow } from 'enzyme';
import IncrementButtonComponent from './IncrementButtonComponent';



describe('IncrementButtonComponent', () => {
    const props = {
        handleClick:jest.fn(),
        buttons: [12, 2, -13],
    };
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<IncrementButtonComponent {...props} />);
    }
    );

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('verify text for first button', () => {
        const first_button_text = wrapper.find('button').first().text();
        expect(first_button_text).toBe('Increment by 12');
    })
    it('verify text for second button', () => {
        const first_button_text = wrapper.find('button').at(1).text();
        expect(first_button_text).toBe('Increment by 2');
    })
    it('verify text for third button', () => {
        const first_button_text = wrapper.find('button').at(2).text();
        expect(first_button_text).toBe('Increment by -13');
    })
    
});
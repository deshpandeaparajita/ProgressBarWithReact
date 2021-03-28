import React from 'react';
import { shallow } from 'enzyme';
import IncrementButtonComponent from './IncrementButtonComponent';



describe('IncrementButtonComponent', () => {
    it('should match snapshot', () => {
        const component = shallow(<IncrementButtonComponent />);
        expect(component).toMatchSnapshot();
    });
});
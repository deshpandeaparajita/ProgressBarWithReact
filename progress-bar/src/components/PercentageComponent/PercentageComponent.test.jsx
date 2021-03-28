import React from 'react';
import { shallow } from 'enzyme';
import PercentageComponent from './PercentageComponent';



describe('PercentageComponent', () => {
    it('should match snapshot', () => {
        const component = shallow(<PercentageComponent />);
        expect(component).toMatchSnapshot();
    });
});
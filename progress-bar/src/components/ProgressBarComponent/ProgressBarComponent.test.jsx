import React from 'react';
import { shallow } from 'enzyme';
import ProgressBarComponent from './ProgressBarComponent';



describe('ProgressBarComponent', () => {
    it('should match snapshot', () => {
        const component = shallow(<ProgressBarComponent />);
        expect(component).toMatchSnapshot();
    });
});
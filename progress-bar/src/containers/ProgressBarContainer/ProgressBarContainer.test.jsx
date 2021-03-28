import React from 'react';
import { shallow } from 'enzyme';
import ProgressBarContainer from './ProgressBarContainer';



describe('ProgressBarContainer', () => {
    it('should match snapshot', () => {
        const component = shallow(<ProgressBarContainer />);
        expect(component).toMatchSnapshot();
    });
});
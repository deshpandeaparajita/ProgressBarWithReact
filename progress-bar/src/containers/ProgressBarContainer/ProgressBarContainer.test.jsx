import React from 'react';
import { shallow } from 'enzyme';
import ProgressBarContainer from './ProgressBarContainer';



describe('ProgressBarContainer', () => {
    const props = {
        handleClick: jest.fn(),
    };

    it('should match snapshot', () => {
        const component = shallow(<ProgressBarContainer {... props} />);
        expect(component).toMatchSnapshot();
    });
});
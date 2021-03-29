import React from 'react';
import { shallow } from 'enzyme';
import PercentageComponent from './PercentageComponent';



describe('PercentageComponent', () => {
    const props = {
        percentRange: 20,
    };

    it('should match snapshot', () => {
        const component = shallow(<PercentageComponent />);
        expect(component).toMatchSnapshot();
    });
    it('verify background color when range is within limit', () => {
        const wrapper = shallow(<PercentageComponent {...props} />);
        expect(wrapper.find('.completed').prop('style')).toHaveProperty('background', 'limegreen');
    });
    it('verify background color is red when range reached limit', () => {
        const props = {
            percentRange: 100,
        };
        const wrapper = shallow(<PercentageComponent {...props} />);
        expect(wrapper.find('.completed').prop('style')).toHaveProperty('background', 'red');
    });
});
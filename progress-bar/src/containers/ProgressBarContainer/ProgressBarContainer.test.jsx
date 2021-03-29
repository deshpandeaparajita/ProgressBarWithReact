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

    it('should match snapshot when click on increment button',()=>{
        const wrapper = shallow(<ProgressBarContainer {...props}/>);
        const increment_button = wrapper.find('IncrementButtonComponent');
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        increment_button.simulate('click', fakeEvent);
        expect(wrapper).toMatchSnapshot();
    })

});
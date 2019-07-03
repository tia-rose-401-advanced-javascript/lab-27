import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../components/Counter/Counter';

describe('Counter component', () => {
  it('has an initial state', () => {
    // eslint-disable-next-line no-undef
    const app = shallow(<Counter />);

    expect(app.find('.count').text()).toBe('0');
  });

  describe('Counter component', () => {
    it('has an initial state', () => {
      // eslint-disable-next-line no-undef
      const app = shallow(<Counter />);
  
      expect(app.find('.count').text()).toBe('0');
    });
  
    it('can increment by 1', () => {
      // eslint-disable-next-line no-undef
      const wrapper = mount(<Counter/>);
  
      wrapper.find('.increment').simulate('click');
      expect(wrapper.state('counter')).toBe(1);
  
      wrapper.find('.increment').simulate('click');
      expect(wrapper.state('counter')).toBe(2);
    });
  
    it('can decrement by 1', () => {
      // eslint-disable-next-line no-undef
      const wrapper = mount(<Counter/>);
  
      wrapper.find('.decrement').simulate('click');
      expect(wrapper.state('counter')).toBe(-1);
  
      wrapper.find('.decrement').simulate('click');
      expect(wrapper.state('counter')).toBe(-2);
    });
  });
  
  describe('Counter snapshot test', () => {
    it('renders to DOM correctly', () => {
      const component = renderer.create(<Counter />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

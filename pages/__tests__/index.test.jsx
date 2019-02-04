import { shallow } from 'enzyme';

import Index from '../index';

describe('<Index />', () => {
  it('should render without crashing', () => {
    expect(shallow(<Index />)).toMatchSnapshot();
  });
});

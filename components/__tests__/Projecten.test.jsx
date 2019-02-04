import { shallow } from 'enzyme';

import Projecten from '../Projecten';

jest.mock('../../data/nl.js');

describe('<Projecten />', () => {
  it('should render without crashing', () => {
    expect(shallow(<Projecten />)).toMatchSnapshot();
  });
});

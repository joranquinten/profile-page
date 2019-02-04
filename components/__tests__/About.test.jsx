import { shallow } from 'enzyme';

import About from '../About';

jest.mock('../../data/nl.js');

describe('<About />', () => {
  it('should render without crashing', () => {
    expect(shallow(<About />)).toMatchSnapshot();
  });
});

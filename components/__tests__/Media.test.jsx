import { shallow } from 'enzyme';

import Media from '../Media';

jest.mock('../../data/nl.js');

describe('<Media />', () => {
  it('should render without crashing', () => {
    expect(shallow(<Media />)).toMatchSnapshot();
  });
});

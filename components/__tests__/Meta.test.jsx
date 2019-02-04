import { shallow } from 'enzyme';

import Meta from '../Meta';

jest.mock('../../data/nl.js');

describe('<Meta />', () => {
  it('should render without crashing', () => {
    expect(shallow(<Meta />)).toMatchSnapshot();
  });
});

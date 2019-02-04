import { shallow } from 'enzyme';

import Resume from '../Resume';

jest.mock('../../data/nl.js');

describe('<Resume />', () => {
  it('should render without crashing', () => {
    expect(shallow(<Resume />)).toMatchSnapshot();
  });
});

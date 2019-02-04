import { shallow } from 'enzyme';

import Page from '../Page';

// jest.mock('../../data/nl.js');

describe('<Page />', () => {
  it('should render without crashing', () => {
    expect(shallow(<Page>Child</Page>)).toMatchSnapshot();
  });
});

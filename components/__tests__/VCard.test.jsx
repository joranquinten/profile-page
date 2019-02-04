import { shallow } from 'enzyme';

import VCard from '../VCard';

jest.mock('../../data/nl.js');

describe('<VCard />', () => {
  it('should render without crashing', () => {
    expect(shallow(<VCard />)).toMatchSnapshot();
  });
});

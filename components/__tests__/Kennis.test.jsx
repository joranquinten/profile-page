import { shallow } from 'enzyme';

import Kennis from '../Kennis';

jest.mock('../../data/nl.js');

describe('<Kennis />', () => {
  it('should render without crashing', () => {
    expect(shallow(<Kennis />)).toMatchSnapshot();
  });
});

import { shallow } from 'enzyme';

import Werkervaring from '../Werkervaring';

jest.mock('../../data/nl.js');

describe('<Werkervaring />', () => {
  it('should render without crashing', () => {
    expect(shallow(<Werkervaring />)).toMatchSnapshot();
  });
});

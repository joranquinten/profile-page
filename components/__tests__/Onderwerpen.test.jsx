import { shallow } from 'enzyme';

import Onderwerpen from '../Onderwerpen';

jest.mock('../../data/nl.js');

describe('<Onderwerpen />', () => {
  it('should render without crashing', () => {
    expect(shallow(<Onderwerpen />)).toMatchSnapshot();
  });
});

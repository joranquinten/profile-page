import { shallow } from 'enzyme';

import Opleiding from '../Opleiding';

jest.mock('../../data/nl.js');

describe('<Opleiding />', () => {
  it('should render without crashing', () => {
    expect(shallow(<Opleiding />)).toMatchSnapshot();
  });
});

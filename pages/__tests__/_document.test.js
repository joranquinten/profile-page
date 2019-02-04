import { shallow } from 'enzyme';

import MyDocument from '../_document';

describe('<MyDocument />', () => {
  it('should render without crashing', () => {
    expect(shallow(<MyDocument />)).toMatchSnapshot();
  });
});

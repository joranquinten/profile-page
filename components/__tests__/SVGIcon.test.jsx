import { shallow } from 'enzyme';
import SVGIcon from '../SVGIcon';

describe('<SVGIcon />', () => {
  it('should render without crashing', () => {
    expect(shallow(<SVGIcon icon="twitter" />)).toMatchSnapshot();
  });
});

import React from 'react';
import PropTypes from 'prop-types';

import { Meta } from '../components';

const Main = ({ children }) => (
  <>
    <Meta />
    {children}
  </>
);

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
};

export default Main;

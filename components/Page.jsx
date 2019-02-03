import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Meta from './Meta';

import AppStyled from '../styled/App';

class Page extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Meta />
        <AppStyled>{children}</AppStyled>
      </>
    );
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
};

export default Page;

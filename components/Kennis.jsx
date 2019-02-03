import React from 'react';
import styled from 'styled-components';

import { colors } from '../styled/themes/default';

import Opleiding from './Opleiding';
import Onderwerpen from './Onderwerpen';
import Media from './Media';

const StyledKennis = styled.div`
  .ant-card {
    border-color: ${colors.blackDarkened};
    background: ${colors.blackLightened};
    color: ${colors.white};
    margin: 0 0 2rem;

  .ant-card-head {
    border-color: ${colors.blackDarkened};
  }

  .ant-card-head-title {
    color: ${colors.tertiaryColor};
  }
`;

const Kennis = () => (
  <StyledKennis>
    <Opleiding />
    <Onderwerpen />
    <Media />
  </StyledKennis>
);

export default Kennis;

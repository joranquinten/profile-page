import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import atSVG from '../static/svg/at.svg';
import buildingSVG from '../static/svg/building.svg';
import cakeSVG from '../static/svg/cake.svg';
import coffeeSVG from '../static/svg/coffee.svg';
import githubSVG from '../static/svg/github.svg';
import guySVG from '../static/svg/guy.svg';
import linkedinSVG from '../static/svg/linkedin.svg';
import mediumSVG from '../static/svg/medium.svg';
import paperPlaneSVG from '../static/svg/paper-plane.svg';
import phoneSVG from '../static/svg/phone.svg';
import twitterSVG from '../static/svg/twitter.svg';

const iconMap = {
  at: atSVG,
  building: buildingSVG,
  cake: cakeSVG,
  coffee: coffeeSVG,
  github: githubSVG,
  guy: guySVG,
  linkedin: linkedinSVG,
  medium: mediumSVG,
  paperPlane: paperPlaneSVG,
  phone: phoneSVG,
  twitter: twitterSVG,
};

const createIcon = icon => ({ __html: iconMap[icon] });

const StyledIcon = styled.span`
  vertical-align: middle;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 14px;
  line-height: 0;
`;

const Icon = props => {
  const { icon } = props;
  return <StyledIcon dangerouslySetInnerHTML={createIcon(icon)} />; // eslint-disable-line react/no-danger
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
};

export default Icon;

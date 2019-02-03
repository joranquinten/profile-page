import React from 'react';
import styled from 'styled-components';
import renderHTML from 'react-render-html';

import { Card } from 'antd';

import { colors } from '../styled/themes/default';

import { projects } from '../data/nl';

const StyledProjecten = styled.div`
  .ant-card {
    border-color: ${colors.blackDarkened};
    background: ${colors.blackLightened};
    color: ${colors.white};
    margin: 0 0 2rem;

    strong {
      color: ${colors.accentColor};
    }

  .ant-card-head {
    border-color: ${colors.blackDarkened};
  }

  .ant-card-head-title {
    color: ${colors.tertiaryColor};
  }
`;

const Projecten = () => (
  <StyledProjecten>
    {projects.map(item => (
      <Card title={item.title} key={item.title}>
        {renderHTML(item.description)}
      </Card>
    ))}
  </StyledProjecten>
);

export default Projecten;

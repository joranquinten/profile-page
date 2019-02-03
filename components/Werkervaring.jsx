import React from 'react';
import renderHTML from 'react-render-html';
import styled from 'styled-components';
import { Timeline, Card } from 'antd';
import { colors } from '../styled/themes/default';

import { sorterByProperty } from '../common/helpers';

import { experience } from '../data/nl';

const StyledTimeline = styled.div`
  .ant-card {
    border-color: ${colors.blackDarkened};
    background: ${colors.blackLightened};
    color: ${colors.white};

    .ant-card-head {
      border-color: ${colors.blackDarkened};
    }

    .ant-card-head-title {
      color: ${colors.tertiaryColor};
    }
  }
`;

const Werkervaring = () => (
  <StyledTimeline>
    <Timeline>
      {experience
        .sort(sorterByProperty('tot', 'date'))
        .reverse()
        .map(item => (
          <Timeline.Item key={item.name} color={colors.primaryColor}>
            <Card title={item.name}>
              {`${item.van} - ${item.tot || 'heden'}`}
              <br />
              {renderHTML(item.description)}
            </Card>
          </Timeline.Item>
        ))}
    </Timeline>
  </StyledTimeline>
);

export default Werkervaring;

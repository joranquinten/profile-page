import React from 'react';
import { Tabs } from 'antd';

import styled from 'styled-components';
import { colors } from '../styled/themes/default';

import Werkervaring from './Werkervaring';
import Projecten from './Projecten';
import Kennis from './Kennis';

const { TabPane } = Tabs;

const StyledResume = styled.div`
  .ant-tabs-nav-container .ant-tabs-nav .ant-tabs-tab-active {
    color: ${colors.primaryColor};
  }
  .ant-tabs-nav-container .ant-tabs-ink-bar {
    background-color: ${colors.primaryColor};
  }
  .ant-tabs-nav-container .ant-tabs-nav {
    color: ${colors.accentColor};
  }
`;

const Resume = () => (
  <StyledResume>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Werkervaring" key="1">
        <Werkervaring />
      </TabPane>
      <TabPane tab="Projecten" key="2">
        <Projecten />
      </TabPane>
      <TabPane tab="Kennis" key="3">
        <Kennis />
      </TabPane>
    </Tabs>
  </StyledResume>
);

export default Resume;

import React from 'react';
import { Layout, BackTop, Icon } from 'antd';

import styled from 'styled-components';
import { colors } from '../styled/themes/default';

import About from '../components/About';
import Resume from '../components/Resume';
import VCard from '../components/VCard';

const { Content, Footer } = Layout;

const StyledLayout = styled.div`
  min-width: 575px;

  > .ant-layout-override,
  .ant-layout-override .ant-layout-footer {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;

const StyledBackTop = styled.div`
  .ant-back-top {
    font-size: 54px;
    path {
      fill: ${colors.white} !important;
    }
    path ~ path {
      fill: ${colors.tertiaryColor} !important;
    }
  }
`;

class Index extends React.Component {
  render() {
    return (
      <StyledLayout>
        <Layout className="ant-layout-override">
          <StyledBackTop>
            <BackTop>
              <Icon type="rocket" theme="twoTone" />
            </BackTop>
          </StyledBackTop>
          <Content>
            <About />
            <Resume />
          </Content>
          <Footer>
            <VCard />
          </Footer>
        </Layout>
      </StyledLayout>
    );
  }
}

export default Index;

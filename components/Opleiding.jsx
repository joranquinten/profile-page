import React from 'react';
import styled from 'styled-components';

import { Card, Table } from 'antd';

import { colors } from '../styled/themes/default';

import { education } from '../data/nl';

const columns = [
  {
    title: 'Wanneer',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Opleiding of certificaat',
    dataIndex: 'description',
    key: 'description',
  },
];

const StyledOpleiding = styled.div`
  .ant-table {
    border-color: ${colors.blackDarkened};
    color: ${colors.white};

  .ant-table-tbody > tr > td {
    border-color: ${colors.blackDarkened};
  }

  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    color: ${colors.primaryColor};
    background-color: ${colors.blackDarkened};
  }

  .ant-card-head-title {
    color: ${colors.tertiaryColor};
  }
`;

const Opleiding = () => (
  <StyledOpleiding>
    <Card title={education.title}>
      <Table
        className="ant-table-override"
        dataSource={education.items}
        columns={columns}
        bordered={false}
        pagination={false}
        showHeader={false}
        size="small"
      />
    </Card>
  </StyledOpleiding>
);

export default Opleiding;

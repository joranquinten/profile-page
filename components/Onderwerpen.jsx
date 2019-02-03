import React from 'react';
import renderHTML from 'react-render-html';
import styled from 'styled-components';

import { Tag, Card } from 'antd';

import { sorterByProperty } from '../common/helpers';
import { topics } from '../data/nl';

const typeColorMap = {
  frameworks: 'volcano',
  languages: 'gold',
  methodologies: 'purple',
  concepts: 'cyan',
  platforms: 'geekblue',
  other: 'blue',
};

const StyledOnderwerpen = styled.div`
  .ant-tag {
    margin: 0.4rem !important;
    display: inline-block;
  }
`;

const Onderwerpen = () => (
  <StyledOnderwerpen>
    <Card title="Onderwerpen">
      {renderHTML(topics.description)}
      {topics.list.sort(sorterByProperty('name')).map(item => (
        <Tag key={item.name} color={typeColorMap[item.type]}>
          {item.name}
        </Tag>
      ))}
    </Card>
  </StyledOnderwerpen>
);

export default Onderwerpen;

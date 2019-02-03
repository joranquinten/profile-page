import React from 'react';
import renderHTML from 'react-render-html';
import styled from 'styled-components';

import { Tag, Card } from 'antd';

import { sorterByProperty } from '../common/helpers';
import { media } from '../data/nl';

const typeColorMap = {
  website: 'volcano',
  podcast: 'gold',
  newsletter: 'purple',
};

const StyledMedia = styled.div`
  .ant-tag {
    margin: 0.4rem !important;
    display: inline-block;
  }
`;

const Media = () => (
  <StyledMedia>
    <Card title="Media">
      {renderHTML(media.description)}
      {media.list.sort(sorterByProperty('name')).map(item => (
        <Tag key={item.name} color={typeColorMap[item.type]}>
          {item.name}
        </Tag>
      ))}
    </Card>
  </StyledMedia>
);

export default Media;

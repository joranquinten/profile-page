import React from 'react';
import styled from 'styled-components';
import renderHTML from 'react-render-html';

import { Row, Col } from 'antd';
import SVGIcon from './SVGIcon';

import { footer, contact } from '../data/nl';

const StyledVCard = styled.div`
  width: 100%;
`;

const Iconic = styled.div`
  font-size: 10px;
  display: flex;
  align-items: flex-start;

  svg {
    height: 24px;
  }

  div,
  span {
    font-size: 1.4rem;
  }
`;

const VCard = () => (
  <StyledVCard id="hcard-Joran-Quinten" className="vcard">
    <Row gutter={16}>
      <Col span={8}>
        <Iconic>
          <SVGIcon icon="coffee" />
          {renderHTML(footer.description)}
        </Iconic>
      </Col>
      <Col span={8}>
        <Iconic>
          <SVGIcon icon="guy" />
          <div>
            <a className="url fn" href={contact.personalUrl}>
              {contact.fullName}
            </a>
            <br />
            <a className="url org" href={contact.organisationUrl}>
              {contact.organisation}
            </a>
            <br />
            <a className="email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <br />
            <span className="tel">{contact.phone}</span>
          </div>
        </Iconic>
      </Col>
      <Col span={8}>
        <Iconic>
          <SVGIcon icon="paperPlane" />
          <span className="adr">
            <span className="street-address">{contact.address.street}</span>
            <br />
            <span className="postal-code">{contact.address.zipcode}</span>
            <br />
            <span className="locality">{contact.address.city}</span>
          </span>
        </Iconic>
      </Col>
    </Row>
  </StyledVCard>
);

export default VCard;

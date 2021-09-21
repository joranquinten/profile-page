import React from 'react';
import styled from 'styled-components';

import renderHTML from 'react-render-html';

import { colors } from '../styled/themes/default';
import { about } from '../data/nl';

const StyledAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 4rem;

  header {
    flex-grow: 3;
    color: ${colors.primaryColor};
    margin-bottom: 4rem;

    h1 {
      color: ${colors.tertiaryColor};
      font-size: 63px;
      line-height: 1;
      margin: 0;
      margin-bottom: -1rem;
    }

    .subtitle {
      line-height: 0;
    }
  }

  .description {
    flex-grow: 1;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    text-align: right;
    color: ${colors.accentColor};

    li {
      margin: 0;
      padding: 0;
      line-height: 1;
      list-style-type: none;
    }
  }

  .bio {
    flex-grow: 4;
  }

  .picture {
    position: absolute;
    bottom: -200px;
    z-index: 1;
    right: -50px;
    flex-grow: 1;
    align-self: stretch;
    max-width: 240px;
    margin-bottom: 4rem;

    img {
      width: 100%;
      border-radius: 100%;
      border: 10px solid ${colors.primaryColor};
      box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.75);
      transform: rotate(-0.05turn);
    }
  }

  blockquote {
    flex-grow: 4;
    position: relative;
    font-family: Georgia;
    font-style: italic;
    color: ${colors.accentColor};
  }

  blockquote:after,
  blockquote:before {
    font-size: 4em;
    position: absolute;
    opacity: 0.4;
    line-height: 0.8em;
    font-style: italic;
    color: ${colors.tertiaryColor};
  }

  blockquote:before {
    content: '"';
    top: 0.04em;
    left: -0.2em;
  }

  blockquote:after {
    content: '"';
    bottom: -0.04em;
    right: -0.2em;
  }
`;

const About = () => (
  <StyledAbout>
    <header>
      {about.title && <h1 key="title">{about.title}</h1>}
      {about.subtitle && (
        <span className="subtitle" key="subtitle">
          {about.subtitle}
        </span>
      )}
    </header>
    {about.tags && (
      <ul className="description">
        {about.tags.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
    {about.bio && <div className="bio">{renderHTML(about.bio)}</div>}
    {about.quote && <blockquote>{renderHTML(about.quote)}</blockquote>}
    {about.picture && (
      <div className="picture">
        <img src={about.picture} alt={`${about.title} ${about.subtitle}`} />
      </div>
    )}
  </StyledAbout>
);

export default About;

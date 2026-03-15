import styled from "styled-components"

const StyledMarkdown = styled.div`
  & {
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    line-height: 1.73;
    overflow: visible;
  }

  & h1:first-child,
  & h2:first-child,
  & h3:first-child,
  & h4:first-child {
    margin-top: 0;
  }

  & > p,
  & > ul,
  & > ol,
  & table,
  & blockquote,
  & img,
  & .katex-display {
    margin-top: 0;
    margin-bottom: 15px;
  }

  & p {
    overflow-x: scroll;
    word-break: break-word;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin: 11.2px 0 4.8px 0;
    font-weight: 700;
    overflow: visible;
  }

  & h2 {
    margin-top: 50px;
    font-size: 24px;
  }

  & h3 {
    margin-top: 30px;
    font-size: 20px;
  }

  & h4,
  & h5,
  & h6 {
    margin-top: 30px;
    font-size: 16px;
  }

  & .heading-anchor {
    display: flex;
    align-items: center;
    width: 20px;
    height: 100%;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    & .heading-anchor {
      display: none;
    }
  }

  & .heading-anchor svg {
    fill: ${props => props.theme.colors.text};
  }

  & strong {
    font-weight: 700;
  }

  & em {
    font-style: italic;
  }

  & blockquote {
    padding: 16px 20px;
    border-left: 3px solid ${props => props.theme.colors.blockQuoteBorder};
    border-radius: 0 8px 8px 0;
    background-color: ${props => props.theme.colors.blockQuoteBackground};
    color: ${props => props.theme.colors.secondaryText};
    font-style: italic;

    & *:last-child {
      margin-bottom: 0;
    }
  }

  & blockquote blockquote {
    margin-top: 24px;
  }

  & blockquote > p > code.language-text {
    background-color: ${props => props.theme.colors.inlineCodeBackgroundDarker};
  }

  & table {
    border-collapse: collapse;
  }

  & th {
    border-bottom: 2px solid ${props => props.theme.colors.border};
    font-weight: 700;
  }

  & td {
    border-top: 1px solid ${props => props.theme.colors.border};
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  & td,
  th {
    padding: 8px;
  }

  & tr:first-child td {
    border-top: none;
  }

  & tr:nth-child(even) {
    background-color: ${props => props.theme.colors.tableBackground};
  }

  & tr:last-child td {
    border-bottom: none;
  }

  & *:not(pre) > code.language-text,
  & table code.language-text {
    position: relative;
    top: -1px;
    padding: 2px 6px;
    border-radius: 5px;
    font-size: 13px;
    background-color: ${props => props.theme.colors.inlineCodeBackground};
    font-weight: 600;
    color: ${props => props.theme.colors.accentColor};
  }

  & h2 > code.language-text,
  & h3 > code.language-text,
  & h4 > code.language-text {
    font-size: inherit;
  }

  & tr:nth-child(even) code.language-text {
    background-color: ${props => props.theme.colors.inlineCodeBackgroundDarker};
  }

  & > p + ul,
  & > p + ol {
    margin-top: -8px;
  }

  & ul,
  & ol {
    padding-left: 25px;
  }

  & ol {
    list-style: decimal;
  }

  & ul {
    list-style: disc;
  }

  & ul ul {
    list-style: circle;
  }

  & ul ul ul {
    list-style: square;
  }

  & li {
    margin-bottom: 7px;
  }

  & li p {
    margin-bottom: 7px;
  }

  & ul li::marker {
    font-size: 12px;
  }

  & pre {
    ::-webkit-scrollbar {
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background: ${props => props.theme.colors.scrollTrack};
    }

    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.scrollHandle};
    }
  }

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  & figcaption {
    margin-top: 5px;
    text-align: center;
    color: #868e96;
    font-size: 12px;
    font-style: italic;
  }

  & hr {
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  & a {
    color: ${props => props.theme.colors.accentColor};
    text-decoration: underline;
    text-decoration-color: transparent;
    text-underline-offset: 3px;
    transition: text-decoration-color 0.2s, opacity 0.2s;
  }

  & a:hover:not(.heading-anchor) {
    text-decoration-color: ${props => props.theme.colors.accentColor};
    opacity: 0.8;
    background-color: transparent;
    color: ${props => props.theme.colors.accentColor};
  }

  & sup {
    margin-left: 2px;
    font-size: 13px;
    vertical-align: super;
  }

  & sup > a {
    padding: 0 1px;
  }

  & .footnotes {
    margin-top: 60px;
    padding-top: 20px;
    border-top: 1px solid ${props => props.theme.colors.border};
    font-size: 14px;
  }
`

export default StyledMarkdown

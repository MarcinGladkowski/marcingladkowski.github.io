import React from "react"
import styled from "styled-components"

import { author } from "../../../../blog-config"

import Divider from "components/Divider"
import TagList from "components/TagList"
import { Link } from "gatsby"

const Wrapper = styled.div`
  margin-top: 32px;
  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const ArticleTitle = styled.h1`
  margin-bottom: 20px;
  line-height: 1.15;
  font-size: 42px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: ${props => props.theme.colors.text};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Information = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 0;
  margin-bottom: 24px;
  font-size: 14.5px;
`

const Author = styled.span`
  & > a {
    font-weight: 600;
    color: ${props => props.theme.colors.accentColor};
    text-decoration: none;
    transition: opacity 0.2s;
  }

  & > a:hover {
    opacity: 0.75;
  }
`

const Date = styled.span`
  font-weight: 400;
  color: ${props => props.theme.colors.tertiaryText};
`

const Header = ({ title, date, tags, minToRead }) => {
  return (
    <Wrapper>
      <ArticleTitle> {title} </ArticleTitle>
      <Information>
        <Author>
          <Link to="/about">@{author}</Link>
        </Author>
        <Date>· {date} </Date>
        <Date>· {minToRead} min read </Date>
      </Information>
      {tags && <TagList tagList={tags} />}
      <Divider mt="0" />
    </Wrapper>
  )
}

export default Header

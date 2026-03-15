import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const TagListWrapper = styled.div`
  margin-bottom: 16px;
  word-break: break-all;
`

const TagLink = styled.div`
  display: inline-block;
  padding: 6px 13px;
  margin-right: 6px;
  margin-bottom: 8px;
  border-radius: 50px;
  border: 1.5px solid ${props =>
    props.selected
      ? props.theme.colors.selectedTagBackground
      : props.theme.colors.border};
  background-color: ${props =>
    props.selected
      ? props.theme.colors.selectedTagBackground
      : "transparent"};
  color: ${props =>
    props.selected
      ? props.theme.colors.selectedTagText
      : props.theme.colors.tertiaryText};
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: all 0.2s;

  &:hover {
    border-color: ${props => props.theme.colors.accentColor};
    background-color: ${props =>
      props.selected
        ? props.theme.colors.hoveredSelectedTagBackground
        : props.theme.colors.accentColorBg};
    color: ${props =>
      props.selected
        ? props.theme.colors.selectedTagText
        : props.theme.colors.accentColor};
  }
`

const spaceToDash = text => {
  return text.replace(/\s+/g, "-")
}

const TagList = ({ tagList, count, selected }) => {
  if (!tagList) return null

  if (!count) {
    return (
      <TagListWrapper>
        {tagList.map((tag, i) => (
          <Link key={JSON.stringify({ tag, i })} to={`/tags?q=${tag}`}>
            <TagLink>{spaceToDash(tag)}</TagLink>
          </Link>
        ))}
      </TagListWrapper>
    )
  }

  return (
    <TagListWrapper>
      {tagList.map((tag, i) => (
        <Link
          key={JSON.stringify({ tag, i })}
          to={
            selected === tag.fieldValue ? "/tags" : `/tags?q=${tag.fieldValue}`
          }
        >
          <TagLink selected={tag.fieldValue === selected}>
            {spaceToDash(tag.fieldValue)} ({tag.totalCount})
          </TagLink>
        </Link>
      ))}
    </TagListWrapper>
  )
}

export default TagList

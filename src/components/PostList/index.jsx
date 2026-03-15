import React, { useState, useEffect } from "react"
import styled from "styled-components"
import _ from "lodash"

import { Link } from "gatsby"

import Title from "components/Title"
import Divider from "components/Divider"
import TagList from "components/TagList"

const PostListWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`

const PostWrapper = styled.div`
  position: relative;
  padding: 28px 24px;
  margin: 0 -24px;
  border-radius: 12px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: ${props => props.theme.colors.background};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
    margin: 0 -10px;
  }
`

const Date = styled.p`
  margin-bottom: 12px;
  font-size: 13.5px;
  letter-spacing: 0.02em;
  color: ${props => props.theme.colors.tertiaryText};
`

const Excerpt = styled.p`
  margin-bottom: 20px;
  line-height: 1.75;
  font-size: 15px;
  color: ${props => props.theme.colors.secondaryText};
  word-break: break-word;
`

const checkIsScrollAtBottom = () => {
  return (
    document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight + 100
  )
}

const PostList = ({ postList }) => {
  const [postCount, setPostCount] = useState(10)

  const handleMoreLoad = _.throttle(() => {
    if (checkIsScrollAtBottom() && postCount < postList.length) {
      setTimeout(() => setPostCount(postCount + 10), 300)
    }
  }, 250)

  useEffect(() => {
    window.addEventListener("scroll", handleMoreLoad)

    return () => {
      window.removeEventListener("scroll", handleMoreLoad)
    }
  }, [postCount, postList])

  useEffect(() => {
    setPostCount(10)
  }, [postList])

  return (
    <PostListWrapper>
      {postList.slice(0, postCount).map((post, i) => {
        const { title, date, tags } = post.frontmatter
        const { excerpt } = post
        const { slug } = post.fields

        return (
          <React.Fragment key={JSON.stringify({ slug, date })}>
            <PostWrapper>
              <Title size="bg">
                <Link to={slug}>{title}</Link>
              </Title>
              <Date>{date}</Date>
              <Excerpt>{excerpt}</Excerpt>
              <TagList tagList={tags} />
            </PostWrapper>

            {postCount - 1 !== i && postList.length - 1 !== i && (
              <Divider mt="48px" mb="32px" />
            )}
          </React.Fragment>
        )
      })}
    </PostListWrapper>
  )
}

export default PostList

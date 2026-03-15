import React, { useEffect, useState } from "react"
import styled, { useTheme } from "styled-components"

import { Link } from "gatsby"

import { title } from "../../../../blog-config"

import {
  FaSun,
  FaMoon,
  FaTags,
  FaRss,
  FaSearch,
  FaListUl,
} from "react-icons/fa"

const HeaderWrapper = styled.header`
  display: block;
  position: fixed;
  top: ${props => (props.isHidden ? -64 : 0)}px;
  left: 0;
  right: 0;
  padding: 18px 16px;
  background-color: ${props => props.theme.colors.headerBackground};
  border-bottom: 1px solid ${props => props.theme.colors.divider};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  opacity: ${props => (props.isHidden ? 0 : 1)};
  transition: top 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s;
  z-index: 999;

  @media (max-width: 768px) {
    padding: 16px 0;
  }
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 64px;

  @media (max-width: 768px) {
    margin: 0 15px;
  }
`

const BlogTitle = styled.span`
  letter-spacing: -0.5px;
  font-family: "Source Code Pro", sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: ${props => props.theme.colors.accentColor};

  & > a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s;
  }

  & > a:hover {
    opacity: 0.8;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    width: 18px;
    height: 18px;
    margin-right: 18px;
    cursor: pointer;
  }

  & svg path {
    fill: ${props => props.theme.colors.icon};
    transition: fill 0.2s;
  }

  & svg:hover path {
    fill: ${props => props.theme.colors.accentColor};
  }
`

const ToggleWrapper = styled.div`
  width: 20px;
  height: 24px;
  margin-right: 15px;
  overflow: hidden;
  box-sizing: border-box;
`

const IconRail = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40px;
  top: ${props => (props.theme === "light" ? "-19px" : "0px")};
  transition: top 0.4s;

  & > svg {
    transition: opacity 0.25s;
  }

  & > svg:first-child {
    opacity: ${props => (props.theme === "light" ? 0 : 1)};
  }

  & > svg:last-child {
    opacity: ${props => (props.theme === "dark" ? 0 : 1)};
  }
`

const Header = ({ toggleTheme }) => {
  const theme = useTheme()
  const [scrollY, setScrollY] = useState()
  const [hidden, setHidden] = useState(false)

  const detectScrollDirection = () => {
    if (scrollY >= window.scrollY) {
      // scroll up
      setHidden(false)
    } else if (scrollY < window.scrollY && 400 <= window.scrollY) {
      // scroll down
      setHidden(true)
    }

    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", detectScrollDirection)

    return () => {
      window.removeEventListener("scroll", detectScrollDirection)
    }
  }, [scrollY])

  useEffect(() => {
    setScrollY(window.scrollY)
  }, [])

  return (
    <HeaderWrapper isHidden={hidden}>
      <Inner>
        <BlogTitle>
          <Link to="/">{title}</Link>
        </BlogTitle>
        <Menu>
          <ToggleWrapper>
            <IconRail theme={theme.name}>
              <FaSun onClick={toggleTheme} />
              <FaMoon onClick={toggleTheme} />
            </IconRail>
          </ToggleWrapper>
          <Link to="/tags">
            <FaTags />
          </Link>
          <Link to="/series">
            <FaListUl />
          </Link>
          <Link to="/rss.xml">
            <FaRss />
          </Link>
          <Link to="/search">
            <FaSearch style={{ marginRight: 0 }} />
          </Link>
        </Menu>
      </Inner>
    </HeaderWrapper>
  )
}

export default Header

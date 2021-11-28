import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <div>
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
      <ol className="main-menu">
        <Link to="/">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/cooperation">Cooperation</Link>
      </ol>
    </div>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}, Marcin Gładkowski</footer>
    </div>
  )
}

export default Layout

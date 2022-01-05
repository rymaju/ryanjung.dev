import { Link } from "gatsby"
import * as React from "react"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div class="centered-content-container">
        <header>
          <h1 class="my-name">Ryan Jung</h1>
          <ul class="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/thoughts">Thoughts</Link>
            </li>
            <li>
              <Link to="/book-reviews">Book Reviews</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer>
          <p>
            <small>
              † - This topic is either very interesting or a bit more nuanced
              than I make it out to be, either way I intentionally omitted some
              details for sake of brevity. Ask me about this in person or email me if
              you're curious.
            </small>
          </p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout

import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav className="teal grey darken-3">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Food</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };

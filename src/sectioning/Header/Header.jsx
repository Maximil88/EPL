import { NavLink } from 'react-router-dom';
import './style.css';

export default function header() {
  return (
    <div className="y-wrap">
      <nav className="navs">
        <p><NavLink to="/">Home</NavLink></p>
        <ul>
          <p>
            <NavLink to="/Teams">Team Search</NavLink>
          </p>
        </ul>
      </nav>

    </div>
  )
}

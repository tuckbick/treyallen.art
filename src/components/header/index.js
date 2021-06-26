import { Link } from 'gatsby';
import * as React from 'react';

const Header = () => (
    <header className="Header">
        <Link to="/">
            <h1>trey allen</h1>
        </Link>
        <nav>
            <ul>
                <li>
                    <a href="https://www.instagram.com/treyxallenart/" target="_blank" rel="noreferrer" >@treyxallenart</a>
                </li>
                <li>
                    <a href="mailto:email@treyallen.art">email@treyallen.art</a>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header;
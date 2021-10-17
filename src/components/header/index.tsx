import { Link } from "gatsby";
import * as React from "react";

import "./index.scss";

const Header = () => (
    <header className="Header">
        <Link to="/">
            <h1>trey allen</h1>
        </Link>
        <nav>
            <ul>
                <li>
                    <a
                        href="https://www.instagram.com/txallenart/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @txallenart
                    </a>
                </li>
                <li>
                    <a href="mailto:email@treyallen.art">email@treyallen.art</a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;

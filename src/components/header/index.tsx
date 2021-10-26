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
                        href="https://www.instagram.com/treyallen.art/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @treyallen.art
                    </a>
                </li>
                <li>
                    <a href="mailto:tmerkord98@gmail.com">tmerkord98@gmail.com</a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;

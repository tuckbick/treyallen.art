import { Link } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

import "./index.scss";

const Header = () => (
    <header className="Header">
        <Helmet
            htmlAttributes={{
                lang: "en",
            }}
        />
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
            </ul>
        </nav>
    </header>
);

export default Header;
